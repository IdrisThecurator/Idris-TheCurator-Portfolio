/** Success Story rows. The tags below are PLACEHOLDERS: replace them with your real impacts and metrics. */
export type ImpactRow = {
  name: string;
  color: string;
  impacts: readonly string[];
  metrics: readonly string[];
  timeframe: string;
};

export const IMPACTS: readonly ImpactRow[] = [
  { name: "TulaPay", color: "#0073bb", impacts: ["Impact 1", "Impact 2", "Impact 3", "Impact 4", "Impact 5"], metrics: ["Metric 1", "Metric 2", "Metric 3", "Metric 4", "Metric 5"], timeframe: "15 months" },
  { name: "Ecoroute", color: "#0d6217", impacts: ["Impact 1", "Impact 2", "Impact 3"], metrics: ["Metric 1", "Metric 2", "Metric 3"], timeframe: "15 months" },
  { name: "Kasoowa", color: "#18b600", impacts: ["Impact 1", "Impact 2", "Impact 3"], metrics: ["Metric 1", "Metric 2", "Metric 3"], timeframe: "15 months" },
  { name: "Ease", color: "#ff9900", impacts: ["Impact 1", "Impact 2", "Impact 3"], metrics: ["Metric 1", "Metric 2", "Metric 3"], timeframe: "15 months" },
  { name: "ULodge", color: "#004b79", impacts: ["Impact 1", "Impact 2", "Impact 3"], metrics: ["Metric 1", "Metric 2", "Metric 3"], timeframe: "15 months" },
];
