export type SalesPoint = {
  date: string;
  turnover: number;
  quantity: number;
  userId: string;
};

export const salesMock: SalesPoint[] = [
  { date: "2026-01-01", turnover: 1200, quantity: 14, userId: "u1" },
  { date: "2026-01-02", turnover: 900, quantity: 10, userId: "u1" },
  { date: "2026-01-03", turnover: 1600, quantity: 18, userId: "u1" },
  { date: "2026-01-04", turnover: 700, quantity: 8, userId: "u1" },
  { date: "2026-01-05", turnover: 2100, quantity: 22, userId: "u1" },
  { date: "2026-01-06", turnover: 1750, quantity: 19, userId: "u1" },
  { date: "2026-01-07", turnover: 980, quantity: 11, userId: "u1" },
  { date: "2026-01-08", turnover: 1340, quantity: 15, userId: "u1" },
  { date: "2026-01-09", turnover: 1580, quantity: 17, userId: "u1" },
  { date: "2026-01-10", turnover: 820, quantity: 9, userId: "u1" },


  { date: "2026-01-01", turnover: 2100, quantity: 9, userId: "u2" },
  { date: "2026-01-02", turnover: 1850, quantity: 8, userId: "u2" },
  { date: "2026-01-03", turnover: 2600, quantity: 12, userId: "u2" },
  { date: "2026-01-04", turnover: 1700, quantity: 6, userId: "u2" },
  { date: "2026-01-05", turnover: 3200, quantity: 14, userId: "u2" },
  { date: "2026-01-06", turnover: 2800, quantity: 13, userId: "u2" },
  { date: "2026-01-07", turnover: 1950, quantity: 7, userId: "u2" },
  { date: "2026-01-08", turnover: 2300, quantity: 10, userId: "u2" },
  { date: "2026-01-09", turnover: 2550, quantity: 11, userId: "u2" },
  { date: "2026-01-10", turnover: 1800, quantity: 8, userId: "u2" },
];
