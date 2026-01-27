export type QualityStats = {
  period: "7d" | "30d" | "90d";
  defectRate: number;
  returnRate: number;
  onTimeRate: number;
};

export const qualityMock: QualityStats = {
  period: "30d",
  defectRate: 2.4,
  returnRate: 1.1,
  onTimeRate: 96.8,
};

