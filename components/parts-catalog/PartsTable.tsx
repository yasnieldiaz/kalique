"use client";

import { useRef, useEffect, Fragment } from "react";
import { cn } from "@/lib/utils";
import { Part } from "./types";

interface PartsTableProps {
  parts: Part[];
  activePartId: string | null;
  onPartHover: (partId: string | null) => void;
  onPartClick: (partId: string) => void;
}

export function PartsTable({
  parts,
  activePartId,
  onPartHover,
  onPartClick,
}: PartsTableProps) {
  const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});

  // Auto-scroll to active row
  useEffect(() => {
    if (activePartId && rowRefs.current[activePartId]) {
      rowRefs.current[activePartId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activePartId]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Table header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="font-semibold text-navy">Parts List</h3>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-auto flex-1">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-navy border-b">No.</th>
              <th className="px-4 py-3 text-left font-semibold text-navy border-b">Code</th>
              <th className="px-4 py-3 text-left font-semibold text-navy border-b">Name</th>
              <th className="px-4 py-3 text-center font-semibold text-navy border-b">Qty</th>
              <th className="px-4 py-3 text-center font-semibold text-navy border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <Fragment key={part.id}>
                {/* Main part row */}
                <tr
                  ref={(el) => { rowRefs.current[part.id] = el; }}
                  className={cn(
                    "border-b border-gray-100 cursor-pointer transition-colors",
                    activePartId === part.id
                      ? "bg-brand-red/10 border-l-4 border-l-brand-red"
                      : "hover:bg-gray-50"
                  )}
                  onMouseEnter={() => onPartHover(part.id)}
                  onMouseLeave={() => onPartHover(null)}
                  onClick={() => onPartClick(part.id)}
                >
                  <td className="px-4 py-3 font-medium text-navy">{part.number}</td>
                  <td className="px-4 py-3">
                    <a href="#" className="text-brand-red hover:underline">
                      {part.code}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{part.name}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{part.quantity}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                        title="Add to cart"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                        title="Add to wishlist"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                        title="More options"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Sub-parts rows */}
                {part.subParts?.map((subPart) => (
                  <tr
                    key={subPart.id}
                    className="border-b border-gray-100 bg-gray-50/50 hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-2 pl-8 text-gray-600 text-xs">{subPart.number}</td>
                    <td className="px-4 py-2">
                      <a href="#" className="text-brand-red hover:underline text-xs">
                        {subPart.code}
                      </a>
                    </td>
                    <td className="px-4 py-2 text-gray-600 text-xs">{subPart.name}</td>
                    <td className="px-4 py-2 text-center text-gray-600 text-xs">{subPart.quantity}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Add to cart">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Add to wishlist">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="More options">
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
