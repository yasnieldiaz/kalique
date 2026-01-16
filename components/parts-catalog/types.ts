export interface Part {
  id: string;
  number: string;
  code: string;
  name: string;
  quantity: number;
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  subParts?: SubPart[];
}

export interface SubPart {
  id: string;
  number: string;
  code: string;
  name: string;
  quantity: number;
}

export interface PartsCatalogData {
  title: string;
  image: string;
  parts: Part[];
}

export interface PartsDiagram {
  id: string;
  title: string;
  image: string;
  parts: Part[];
  hideMarkers?: boolean; // Hide markers when image already has numbered labels
}

export interface PartsGroupData {
  title: string;
  diagrams: PartsDiagram[];
}

export interface PartsGroup {
  id: string;
  code: string;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  groups: PartsGroup[];
}
