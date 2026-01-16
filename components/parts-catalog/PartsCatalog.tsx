"use client";

import { useState } from "react";
import { PartsImage } from "./PartsImage";
import { PartsTableCompact } from "./PartsTableCompact";
import { PartsCatalogData } from "./types";

interface PartsCatalogProps {
  data: PartsCatalogData;
}

export function PartsCatalog({ data }: PartsCatalogProps) {
  const [activePartId, setActivePartId] = useState<string | null>(null);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  const handlePartHover = (partId: string | null) => {
    if (!selectedPartId) {
      setActivePartId(partId);
    }
  };

  const handlePartClick = (partId: string) => {
    if (selectedPartId === partId) {
      setSelectedPartId(null);
      setActivePartId(null);
    } else {
      setSelectedPartId(partId);
      setActivePartId(partId);
    }
  };

  const currentActiveId = selectedPartId || activePartId;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-main px-4 py-3">
          <nav className="text-sm text-gray-500 mb-1">
            <span className="hover:text-brand-red cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-brand-red cursor-pointer">Spare Parts</span>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Main content - Side by side layout */}
      <div className="container-main px-4 py-4">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Left - Image with markers */}
          <div className="xl:w-1/2 xl:sticky xl:top-4 xl:self-start">
            <PartsImage
              image={data.image}
              alt={data.title}
              parts={data.parts}
              activePartId={currentActiveId}
              onPartHover={handlePartHover}
              onPartClick={handlePartClick}
            />
          </div>

          {/* Right - Parts table */}
          <div className="xl:w-1/2">
            <PartsTableCompact
              parts={data.parts}
              activePartId={currentActiveId}
              onPartHover={handlePartHover}
              onPartClick={handlePartClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
