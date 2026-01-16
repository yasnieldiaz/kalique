"use client";

import { cn } from "@/lib/utils";

interface PartMarkerProps {
  number: string;
  x: number;
  y: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export function PartMarker({
  number,
  x,
  y,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: PartMarkerProps) {
  return (
    <button
      className={cn(
        "absolute z-10 flex items-center justify-center",
        "w-7 h-7 rounded-full text-xs font-bold",
        "transform -translate-x-1/2 -translate-y-1/2",
        "transition-all duration-200 cursor-pointer",
        "border-2 shadow-md",
        isActive
          ? "bg-brand-red text-white border-brand-red scale-125 ring-4 ring-brand-red/30"
          : "bg-white text-navy border-gray-300 hover:border-brand-red hover:text-brand-red"
      )}
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {number}
    </button>
  );
}
