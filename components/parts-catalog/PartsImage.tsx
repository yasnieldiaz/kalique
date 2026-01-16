"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Part } from "./types";
import { PartMarker } from "./PartMarker";

interface PartsImageProps {
  image: string;
  alt: string;
  parts: Part[];
  activePartId: string | null;
  onPartHover: (partId: string | null) => void;
  onPartClick: (partId: string) => void;
  hideMarkers?: boolean;
}

export function PartsImage({
  image,
  alt,
  parts,
  activePartId,
  onPartHover,
  onPartClick,
  hideMarkers = false,
}: PartsImageProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.25, 1);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Limit panning based on zoom level
      const maxPan = (zoom - 1) * 150;
      setPosition({
        x: Math.max(-maxPan, Math.min(maxPan, newX)),
        y: Math.max(-maxPan, Math.min(maxPan, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Zoom controls */}
      <div className="flex items-center gap-2 p-3 border-b border-gray-100">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors font-bold text-gray-600"
          title="Zoom In"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors font-bold text-gray-600"
          title="Zoom Out"
        >
          −
        </button>
        <span className="text-sm text-gray-500 ml-2">{Math.round(zoom * 100)}%</span>
        {zoom > 1 && (
          <button
            onClick={handleReset}
            className="ml-auto text-xs text-gray-500 hover:text-gray-700 underline"
          >
            Reset
          </button>
        )}
      </div>

      {/* Image container with markers */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative aspect-[4/3] w-full bg-white transition-transform duration-200"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain"
            priority
            draggable={false}
          />

          {/* Part markers - positioned relative to image area */}
          {!hideMarkers && parts.map((part) => (
            <PartMarker
              key={part.id}
              number={part.number}
              x={part.position.x}
              y={part.position.y}
              isActive={activePartId === part.id}
              onMouseEnter={() => onPartHover(part.id)}
              onMouseLeave={() => onPartHover(null)}
              onClick={() => onPartClick(part.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
