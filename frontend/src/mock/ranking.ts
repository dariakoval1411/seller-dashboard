export type RankingItem = {
  id: string;
  name: string;
  sold: number;
  turnover: number;
};

export const rankingMock: RankingItem[] = [
  { id: "P-1", name: "Wireless Mouse", sold: 128, turnover: 6400 },
  { id: "P-2", name: "USB-C Hub", sold: 96, turnover: 4800 },
  { id: "P-3", name: "Mechanical Keyboard", sold: 72, turnover: 10800 },
  { id: "P-4", name: "Webcam 1080p", sold: 64, turnover: 5120 },
  { id: "P-5", name: "Headphones", sold: 51, turnover: 7650 },
];

