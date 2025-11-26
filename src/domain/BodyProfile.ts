export type BodyArea =
  | "ABDOMEN"
  | "THIGHS"
  | "BUST"
  | "BACK"
  | "ARMS"
  | "NECK"
  | "HIPS";

export interface SensoryPoint {
  area: BodyArea;
  description: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  emotionalTag?: string;
}

export interface TraumaMarker {
  ageAtEvent?: number;
  shortNarrative: string;
  relatedBodyAreas: BodyArea[];
  designNotes?: string;
}

export interface BodyMeasurements {
  heightCm?: number;
  weightKg?: number;
  bustCm?: number;
  waistCm?: number;
  hipsCm?: number;
  thighCircCm?: number;
}

export interface BodyProfile {
  id: string;
  ageRange?: string;
  genderIdentity?: string;
  morphologyNotes?: string;
  measurements?: BodyMeasurements;
  sensoryMap?: SensoryPoint[];
  traumaHistory?: TraumaMarker[];
  movementContext?: string;
  createdAt: string;
  updatedAt: string;
}
