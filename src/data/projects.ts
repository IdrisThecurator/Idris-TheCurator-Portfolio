/** Edit these to change the project cards. Images live in public/projects. */
export const CATALOGUE_URL = "#"; // link for "View My Work Catalogue"

export type Project = {
  name: string;
  /** Brand color for the project name. Omit for the default grey. */
  color?: string;
  meta: string;
  image?: string;
  href: string;
};

export const FEATURED: readonly Project[] = [
  { name: "Abalaye", color: "#509346", meta: "Fintech • 2026", image: "/projects/hand-phone.png", href: "#" },
  { name: "TulaPay", color: "#0073bb", meta: "Fintech • 2026", image: "/projects/hand-phone.png", href: "#" },
];

export const TEASER: Project = { name: "Tariqa", meta: "Mobile, Fintech", href: "#" };
