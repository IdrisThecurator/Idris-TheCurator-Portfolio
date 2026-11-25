/**
 * Pricing packages. PLACEHOLDER content: the prices ($1,800) come from the Figma file and the
 * descriptions are drafts. Edit freely. The first package is open when the page loads.
 */
export type Plan = {
  name: string;
  summary: string;
  price: string;
  includes: readonly string[];
};

export const PLANS: readonly Plan[] = [
  {
    name: "Brand Design",
    summary: "A visual identity that makes your business instantly recognizable.",
    price: "$1,800",
    includes: [
      "Logo design with primary and secondary marks",
      "Color palette and typography system",
      "Brand guidelines document",
      "Social media and marketing templates",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Product Design",
    summary: "End-to-end design for web and mobile products, from idea to polished interface.",
    price: "$1,800",
    includes: [
      "User research and competitor analysis",
      "User flows and wireframes",
      "High-fidelity UI design",
      "Clickable prototype",
      "Developer handoff files",
    ],
  },
  {
    name: "Software Design",
    summary: "Interfaces for dashboards, platforms and internal tools.",
    price: "$1,800",
    includes: [
      "Information architecture and navigation",
      "Dashboard and data-heavy screens",
      "Reusable component library",
      "Interactive prototype",
      "Usability review",
    ],
  },
  {
    name: "Development",
    summary: "Approved designs turned into fast, responsive websites.",
    price: "$1,800",
    includes: [
      "Responsive build in Next.js",
      "Content and CMS setup",
      "Accessibility and performance checks",
      "Deployment to your domain",
      "Basic launch support",
    ],
  },
  {
    name: "Data Analytics",
    summary: "Clear insight from raw data to guide your decisions.",
    price: "$1,800",
    includes: [
      "Data cleaning and validation",
      "Analysis of your key metrics",
      "Interactive dashboard",
      "Summary report with recommendations",
      "Walkthrough session",
    ],
  },
  {
    name: "Project Marketing",
    summary: "Launch visuals and pages that explain what your product does.",
    price: "$1,800",
    includes: [
      "Landing page design",
      "Campaign and social visuals",
      "Product explainer content",
      "Launch checklist",
      "Performance review",
    ],
  },
];
