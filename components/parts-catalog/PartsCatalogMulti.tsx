"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { PartsImage } from "./PartsImage";
import { PartsTableCompact } from "./PartsTableCompact";
import { PartsGroupData } from "./types";
import { cn } from "@/lib/utils";

interface PartsCatalogMultiProps {
  data: PartsGroupData;
  productSlug?: string;
}

export function PartsCatalogMulti({ data, productSlug }: PartsCatalogMultiProps) {
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  const [activePartId, setActivePartId] = useState<string | null>(null);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  const currentDiagram = data.diagrams[activeDiagramIndex];

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

  const handleDiagramChange = (index: number) => {
    setActiveDiagramIndex(index);
    setActivePartId(null);
    setSelectedPartId(null);
  };

  const currentActiveId = selectedPartId || activePartId;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-main px-4 py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span className="mx-2">/</span>
            <Link href={productSlug ? `/parts-catalog/${productSlug}` : "/parts-catalog"} className="hover:text-brand-red">Spare Parts</Link>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Diagram tabs */}
      {data.diagrams.length > 1 && (
        <div className="bg-white border-b border-gray-200 py-3 relative z-10">
          <div className="container-main px-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Diagrams:</span>
              <div className="inline-flex bg-gray-200 rounded-lg p-1 gap-1">
                {data.diagrams.map((diagram, index) => (
                  <button
                    key={diagram.id}
                    onClick={() => handleDiagramChange(index)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-md transition-all whitespace-nowrap font-sans",
                      activeDiagramIndex === index
                        ? "bg-red-600 text-white font-semibold shadow-md"
                        : "bg-white text-gray-800 hover:bg-gray-100 font-medium"
                    )}
                  >
                    {diagram.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="container-main px-4 py-4">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Left - Image with markers */}
          <div className="xl:w-1/2 xl:sticky xl:top-4 xl:self-start">
            <PartsImage
              image={currentDiagram.image}
              alt={currentDiagram.title}
              parts={currentDiagram.parts}
              activePartId={currentActiveId}
              onPartHover={handlePartHover}
              onPartClick={handlePartClick}
              hideMarkers={currentDiagram.hideMarkers}
            />
          </div>

          {/* Right - Parts table */}
          <div className="xl:w-1/2">
            <PartsTableCompact
              parts={currentDiagram.parts}
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
