/**
 * Testimonials. Everything below is PLACEHOLDER content from the Figma file: replace it with real quotes.
 * Add or remove entries freely: the "1/10" counter and the arrows follow the list automatically.
 * `accent: true` parts of a quote are shown in the grey-blue highlight color.
 * Photos go in public/testimonials (portrait, about 305 x 350).
 */
export type Testimonial = {
  name: string;
  role: string;
  image?: string;
  quote: readonly { text: string; accent?: boolean }[];
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Elon Mukailana",
    role: "CEO, Tesla.",
    image: "/testimonials/person-1.png",
    quote: [
      { text: "Working with", accent: true },
      { text: " Idris was instrumental to the success of our product. " },
      { text: "His design decisions were always backed by research and user insights,", accent: true },
      { text: " resulting in improved conversion rates, smoother user journeys, and stronger product adoption." },
    ],
  },
  {
    name: "Client Name",
    role: "Role, Company.",
    quote: [
      { text: "Placeholder quote.", accent: true },
      { text: " Replace this with what a client, colleague or collaborator said about working with you." },
    ],
  },
  {
    name: "Client Name",
    role: "Role, Company.",
    quote: [
      { text: "Placeholder quote.", accent: true },
      { text: " Replace this with what a client, colleague or collaborator said about working with you." },
    ],
  },
];
