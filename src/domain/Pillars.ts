export enum PillarId {
  BODY_IMPARTIALITY = "BODY_IMPARTIALITY",
  DEEP_LISTENING = "DEEP_LISTENING",
  ENGINEERING_OF_DRESS = "ENGINEERING_OF_DRESS",
  REAL_BODY_VALIDATION = "REAL_BODY_VALIDATION",
  COMFORT_AS_SOCIAL_TECHNOLOGY = "COMFORT_AS_SOCIAL_TECHNOLOGY",
  EMOTIONAL_MATERIAL_LONGEVITY = "EMOTIONAL_MATERIAL_LONGEVITY",
  TECH_AND_SUSTAINABILITY = "TECH_AND_SUSTAINABILITY",
}

export interface Pillar {
  id: PillarId;
  name: string;
  description: string;
  exampleCase: string;
}

export const PILLARS: Pillar[] = [
  {
    id: PillarId.BODY_IMPARTIALITY,
    name: "Body Impartiality",
    description:
      "Observe the body neutrally, free from social stigmas or aesthetic standards. The body is not corrected; its unique mechanics guide design.",
    exampleCase:
      "A client felt respected in a fitting room when a garment accompanied her body rather than hiding it.",
  },
  {
    id: PillarId.DEEP_LISTENING,
    name: "Design as Deep Listening",
    description:
      "Conduct sensory and symbolic listening using body language, movement, and non-verbal cues to understand users' stories and emotions.",
    exampleCase:
      "Co-created a light-colored garment with a 58-year-old user, helping her reconcile with a past trauma.",
  },
  {
    id: PillarId.ENGINEERING_OF_DRESS,
    name: "Engineering of Dress",
    description:
      "Elevate pattern-making to applied science, focusing on ergonomics and emotional freedom by aligning fabric structure, cut, and seam types.",
    exampleCase:
      "A bodysuit with strategic compression allowed a plus-size user to dance freely while feeling supported.",
  },
  {
    id: PillarId.REAL_BODY_VALIDATION,
    name: "Real Body Validation",
    description:
      "Measure success through emotional and practical validation with real bodies, prioritizing psychological and physiological responses.",
    exampleCase:
      "A client reported feeling embraced rather than disguised, validating the design through emotional comfort.",
  },
  {
    id: PillarId.COMFORT_AS_SOCIAL_TECHNOLOGY,
    name: "Comfort as Social Technology",
    description:
      "Design for radical comfort, reducing cognitive noise to empower individuals with better performance and confidence.",
    exampleCase:
      "92% of users reported not changing clothes during the day, indicating high emotional and practical suitability.",
  },
  {
    id: PillarId.EMOTIONAL_MATERIAL_LONGEVITY,
    name: "Emotional and Material Longevity",
    description:
      "Challenge fast fashion by creating durable, beloved pieces that form lasting emotional bonds.",
    exampleCase:
      "A customer wore the same Wonder Size pants for four years, illustrating a deep and lasting connection.",
  },
  {
    id: PillarId.TECH_AND_SUSTAINABILITY,
    name: "Integrated Technology and Sustainability",
    description:
      "Use technology such as nano-fabrics and bio-interactive materials to provide tangible benefits and reduce waste.",
    exampleCase:
      "Thermo-activated aloe vera microcapsules improved thermal comfort for a menopausal client.",
  },
];
