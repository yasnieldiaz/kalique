"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { PartsGroup } from "./types";

interface PartsGroupCardProps {
  group: PartsGroup;
  productSlug: string;
  isSelected?: boolean;
}

export function PartsGroupCard({ group, productSlug, isSelected }: PartsGroupCardProps) {
  return (
    <Link
      href={`/parts-catalog/${productSlug}/${group.slug}`}
      className={cn(
        "group block bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300",
        "hover:shadow-2xl hover:-translate-y-2 border-2",
        isSelected ? "border-brand-red" : "border-transparent hover:border-brand-red"
      )}
    >
      {/* Image container */}
      <div className="relative aspect-square bg-gray-50 p-4">
        <Image
          src={group.image}
          alt={group.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <div className="p-3 bg-white border-t border-gray-100">
        <span className="inline-block px-1.5 py-0.5 text-xs font-bold text-white bg-brand-red rounded mb-1">
          {group.code}
        </span>
        <p className="text-sm text-navy font-medium leading-snug line-clamp-2">
          {group.name}
        </p>
      </div>
    </Link>
  );
}
