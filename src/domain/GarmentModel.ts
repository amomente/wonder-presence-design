import { BdyArea } from "./BodyProfile";

export type GarmentCategory =
  | "LEGGINGS"
  | "TOP"
  | "BODYSUIT"
  | "PANTS"
  | "DRESS"
  | "OUTER_LAYER";

export interface FabricTechFeature {
  type:
    | "THERMO_REGULATION"
    | "ALOE_VERA_MICROCAPSULE"
    | "COMPRESSION"
    | "UV_PROTECTION"
    | "ANTIMICROBIAL"
    | "MOISTURE_WICKING";
  description: string;
  expectedBenefit: string;
}

export interface PatternEngineering {
  hasGusset?: boolean;
  cutDirectionNotes?: string;
  compressionZones?: {
    area: BodyArea;
    compressionLevel: "LIGHT" | "MEDIUM" | "HIGH";
  }[];
  seamPlacementNotes?: string;
}

export interface GarmentModel {
  id: string;
  name: string;
  category: GarmentCategory;
  intendedUse: string;
  fabricComposition: string;
  techFeatures?: FabricTechFeature[];
  patternEngineering?: PatternEngineering;
  sizeRange?: string[];
  createdAt: string;
  updatedAt: string;
}
