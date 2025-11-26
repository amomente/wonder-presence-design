import { BodyProfile } from "./BodyProfile";
import { GarmentModel } from "./GarmentModel";

export interface EmotionalState {
  before: string;
  after: string;
}

export interface PresenceMetrics {
  comfortScore: number;        // 0–100
  presenceScore: number;       // 0–100
  autonomyScore: number;       // 0–100
  emotionalLongevityScore: number; // 0–100
  postureChangeNotes?: string;
  cognitiveNoiseReductionNotes?: string;
}

export interface ExperienceSession {
  id: string;
  bodyProfileId: string;
  garmentModelId: string;
  context: string;
  date: string;             // ISO date
  emotionalState: EmotionalState;
  sensoryFeedback: string[];
  nonVerbalObservations: string[];
  metrics: PresenceMetrics;
  notesForDesignTeam?: string;
}
