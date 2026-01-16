import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Map countries to locales
const countryToLocale: Record<string, string> = {
  // Hungary -> Hungarian
  'HU': 'hu',
  // Rest of the world -> English
};

// Search engine crawlers - don't redirect them, let them see canonical content
const crawlerPatterns = [
  'googlebot',
  'bingbot',
  'yandex',
  'duckduckbot',
  'slurp',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'applebot',
  'semrushbot',
  'ahrefsbot',
];

function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return crawlerPatterns.some(pattern => ua.includes(pattern));
}

const intlMiddleware = createMiddleware(routing);

// Legacy WordPress URL redirects (301) and removals (410)
const legacyRedirects: Record<string, string> = {
  '/xag-p100': '/hu/products/p100-pro',
  '/xag-p100/': '/hu/products/p100-pro',
  '/xag-p150': '/hu/products/p150-max',
  '/xag-p150/': '/hu/products/p150-max',
  '/termekek': '/hu/products',
  '/termekek/': '/hu/products',
  '/kapcsolat': '/hu/contact-us',
  '/kapcsolat/': '/hu/contact-us',
  '/rolunk': '/hu/about-us',
  '/rolunk/': '/hu/about-us',
};

// WordPress paths that should return 410 Gone (permanently removed)
const wpRemovedPaths = [
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/wp-login',
  '/wp-json',
  '/xmlrpc.php',
  '/wp-cron.php',
  '/wp-config.php',
  '/wp-settings.php',
  '/wp-load.php',
  '/wp-blog-header.php',
];

// Security headers to add to all responses
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://api.resend.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
};

function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export default function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // 0. Handle legacy WordPress URLs
  // Check for 301 redirects (old content pages)
  const redirectTo = legacyRedirects[pathname.toLowerCase()];
  if (redirectTo) {
    const url = request.nextUrl.clone();
    url.pathname = redirectTo;
    const response = NextResponse.redirect(url, 301);
    return addSecurityHeaders(response);
  }

  // Check for WordPress paths that should return 410 Gone
  const isWpPath = wpRemovedPaths.some(wp => pathname.toLowerCase().startsWith(wp));
  if (isWpPath || pathname.match(/\/wp-.*\.php$/)) {
    const response = new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: { 'X-Robots-Tag': 'noindex' }
    });
    return addSecurityHeaders(response);
  }

  // 1. Redirect www to non-www (canonical URL)
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = host.replace('www.', '');
    const response = NextResponse.redirect(url, 301);
    return addSecurityHeaders(response);
  }

  // 2. Check if path already has a locale prefix
  const hasLocalePrefix = /^\/(hu|en)(\/|$)/.test(pathname);

  // 3. Check if user has a locale cookie (they manually selected a language)
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;

  // 4. Get user agent to detect crawlers
  const userAgent = request.headers.get('user-agent') || '';

  // 5. If no locale in URL and no manual selection, detect by country
  // BUT: Don't redirect search engine crawlers - let them see canonical content
  if (!hasLocalePrefix && !localeCookie && pathname === '/') {
    // Skip geo-redirect for search engine crawlers
    if (isCrawler(userAgent)) {
      const response = intlMiddleware(request);
      return addSecurityHeaders(response);
    }

    // Get country from Cloudflare header (CF-IPCountry)
    const country = request.headers.get('cf-ipcountry') ||
                   request.headers.get('x-vercel-ip-country') ||
                   '';

    const detectedLocale = countryToLocale[country] || 'hu';

    // Redirect to detected locale (use 302 for geo-redirects, not 301)
    if (detectedLocale !== 'hu') { // 'hu' is default, no redirect needed
      const url = request.nextUrl.clone();
      url.pathname = `/${detectedLocale}`;
      const response = NextResponse.redirect(url, 302);
      return addSecurityHeaders(response);
    }
  }

  // Get response from intlMiddleware and add security headers
  const response = intlMiddleware(request);
  return addSecurityHeaders(response);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
