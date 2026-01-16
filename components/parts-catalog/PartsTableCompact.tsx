"use client";

import { useRef, useEffect, Fragment } from "react";
import { cn } from "@/lib/utils";
import { Part } from "./types";

interface PartsTableCompactProps {
  parts: Part[];
  activePartId: string | null;
  onPartHover: (partId: string | null) => void;
  onPartClick: (partId: string) => void;
}

export function PartsTableCompact({
  parts,
  activePartId,
  onPartHover,
  onPartClick,
}: PartsTableCompactProps) {
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  useEffect(() => {
    if (activePartId && rowRefs.current[activePartId]) {
      rowRefs.current[activePartId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activePartId]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Scrollable table */}
      <div className="overflow-auto max-h-[calc(100vh-180px)]">
        <table className="w-full text-xs">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="border-b border-gray-200">
              <th className="px-2 py-2 text-left font-semibold text-navy w-12">No.</th>
              <th className="px-2 py-2 text-left font-semibold text-navy">Code</th>
              <th className="px-2 py-2 text-left font-semibold text-navy">Name</th>
              <th className="px-2 py-2 text-center font-semibold text-navy w-10">Qty</th>
              <th className="px-2 py-2 text-center font-semibold text-navy w-20">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {parts.map((part) => (
              <Fragment key={part.id}>
                {/* Main part row */}
                <tr
                  ref={(el) => { rowRefs.current[part.id] = el; }}
                  className={cn(
                    "cursor-pointer transition-colors",
                    activePartId === part.id
                      ? "bg-brand-red/10"
                      : "hover:bg-gray-50"
                  )}
                  onMouseEnter={() => onPartHover(part.id)}
                  onMouseLeave={() => onPartHover(null)}
                  onClick={() => onPartClick(part.id)}
                >
                  <td className={cn(
                    "px-2 py-1.5 font-medium",
                    activePartId === part.id ? "text-brand-red" : "text-navy"
                  )}>
                    {part.number}
                  </td>
                  <td className="px-2 py-1.5">
                    <span className="text-brand-red hover:underline cursor-pointer">
                      {part.code}
                    </span>
                  </td>
                  <td className="px-2 py-1.5 text-gray-700 truncate max-w-[200px]" title={part.name}>
                    {part.name}
                  </td>
                  <td className="px-2 py-1.5 text-center text-gray-700">{part.quantity}</td>
                  <td className="px-2 py-1.5">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1 hover:bg-gray-100 rounded" title="Add to cart">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Favorite">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Expand">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Sub-parts */}
                {part.subParts?.map((subPart) => (
                  <tr
                    key={subPart.id}
                    className="bg-gray-50/50 hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="px-2 py-1 pl-5 text-gray-500 text-[10px]">{subPart.number}</td>
                    <td className="px-2 py-1">
                      <span className="text-brand-red/80 hover:underline cursor-pointer text-[10px]">
                        {subPart.code}
                      </span>
                    </td>
                    <td className="px-2 py-1 text-gray-500 text-[10px] truncate max-w-[200px]" title={subPart.name}>
                      {subPart.name}
                    </td>
                    <td className="px-2 py-1 text-center text-gray-500 text-[10px]">{subPart.quantity}</td>
                    <td className="px-2 py-1">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-0.5 hover:bg-gray-200 rounded">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>
                        <button className="p-0.5 hover:bg-gray-200 rounded">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </button>
                        <button className="p-0.5 hover:bg-gray-200 rounded">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
