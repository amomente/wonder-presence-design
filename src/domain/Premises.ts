export enum PremiseId {
  BODY_IMPARTIALITY = "BODY_IMPARTIALITY",
  BODY_AS_STARTING_POINT = "BODY_AS_STARTING_POINT",
  SENSORIAL_DISAPPEARANCE = "SENSORIAL_DISAPPEARANCE",
  FAVORITE_GARMENT = "FAVORITE_GARMENT",
  IMMEDIATE_BENEFIT = "IMMEDIATE_BENEFIT",
}

export interface Premise {
  id: PremiseId;
  title: string;
  description: string;
  implicationsForDesign: string[];
}

export const PREMISES: Premise[] = [
  {
    id: PremiseId.BODY_IMPARTIALITY,
    title: "The designer must be impartial and free of body judgments",
    description:
      "Design decisions must not be driven by stigma or normative standards. Every body is a valid starting point.",
    implicationsForDesign: [
      "Use neutral language in documents and fittings.",
      "Collect user narratives without correcting the body.",
    ],
  },
  {
    id: PremiseId.BODY_AS_STARTING_POINT,
    title: "The body is the starting point, not the obstacle",
    description:
      "The body is a territory of freedom. Design begins with real bodies using body mapping and affective ergonomics.",
    implicationsForDesign: [
      "Co-create with real users through body mapping.",
      "Design to accompany movement and emotion."
    ],
  },
  {
    id: PremiseId.SENSORIAL_DISAPPEARANCE,
    title: "The ideal garment is one that disappears from consciousness",
    description:
      "By eliminating cognitive noise, garments free the wearer to focus on life rather than discomfort.",
    implicationsForDesign: [
      "Optimize cut, fabric and fit to reduce sensory distraction.",
      "Test for cognitive load reduction in fittings."
    ],
  },
  {
    id: PremiseId.FAVORITE_GARMENT,
    title: "The goal is to create a favorite garment for everyday use",
    description:
      "Success is measured by emotional longevity: garments chosen again and again for autonomy and affection.",
    implicationsForDesign: [
      "Design for deep bonds rather than trends.",
      "Prioritize comfort and autonomy."
    ],
  },
  {
    id: PremiseId.IMMEDIATE_BENEFIT,
    title: "Modern life demands clothes with immediate benefits",
    description:
      "Garments should deliver tangible benefits through intelligent materials and technology.",
    implicationsForDesign: [
      "Explore smart textiles and bio-interactive fabrics.",
      "Align technology with real functional needs."
    ],
  },
];
