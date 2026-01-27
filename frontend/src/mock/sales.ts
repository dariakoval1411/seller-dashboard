export type SalesPoint = {
  date: string;
  turnover: number;
  count: number;
};


export const SALES_BY_USER: Record<string, SalesPoint[]> = {
  u1: [
    { date: "2026-01-01", turnover: 1200, count: 5 },
    { date: "2026-01-02", turnover: 900, count: 3 },
    { date: "2026-01-03", turnover: 1600, count: 7 },
    { date: "2026-01-04", turnover: 600, count: 2 },
    { date: "2026-01-05", turnover: 2100, count: 9 },
    { date: "2026-01-06", turnover: 800, count: 4 },
    { date: "2026-01-07", turnover: 1400, count: 6 },
    { date: "2026-01-08", turnover: 1100, count: 5 },
    { date: "2026-01-09", turnover: 1700, count: 8 },
    { date: "2026-01-10", turnover: 500, count: 1 },
    { date: "2026-01-11", turnover: 1900, count: 8 },
    { date: "2026-01-12", turnover: 1300, count: 6 },
  ], u2: [
    { date: "2026-01-01", turnover: 300, count: 1 },
    { date: "2026-01-02", turnover: 700, count: 2 },
    { date: "2026-01-03", turnover: 400, count: 1 },
    { date: "2026-01-04", turnover: 1200, count: 5 },
    { date: "2026-01-05", turnover: 900, count: 4 },
    { date: "2026-01-06", turnover: 1500, count: 6 },
    { date: "2026-01-07", turnover: 1000, count: 4 },
    { date: "2026-01-08", turnover: 600, count: 3 },
    { date: "2026-01-09", turnover: 800, count: 3 },
    { date: "2026-01-10", turnover: 1400, count: 6 },
    { date: "2026-01-11", turnover: 1100, count: 5 },
    { date: "2026-01-12", turnover: 500, count: 2 },
  ],
};