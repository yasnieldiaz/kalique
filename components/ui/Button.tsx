import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover shadow-sm",
  secondary:
    "bg-navy text-white hover:bg-navy-light shadow-sm",
  outline:
    "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white",
  "outline-white":
    "bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy",
  ghost:
    "bg-transparent text-navy hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  );
}
