export type RankingItem = {
  id: string;
  name: string;
  sold: number;
  turnover: number;
  userId: string;
};

export const rankingMock: RankingItem[] = [
  { id: "P-1", userId: "u1", name: "Wireless Mouse", sold: 128, turnover: 6400 },
  { id: "P-2", userId: "u1", name: "USB-C Hub", sold: 96, turnover: 4800 },
  { id: "P-3", userId: "u1", name: "Mechanical Keyboard", sold: 72, turnover: 10800 },
  { id: "P-4", userId: "u1", name: "Webcam 1080p", sold: 64, turnover: 5120 },
  { id: "P-5", userId: "u1", name: "Headphones", sold: 51, turnover: 7650 },
  { id: "P-6", userId: "u1", name: "Laptop Stand", sold: 44, turnover: 3520 },

  { id: "P-101", userId: "u2", name: "Noise Cancelling Headphones", sold: 38, turnover: 11400 },
  { id: "P-102", userId: "u2", name: "4K Monitor", sold: 22, turnover: 17600 },
  { id: "P-103", userId: "u2", name: "Gaming Chair", sold: 19, turnover: 9500 },
  { id: "P-104", userId: "u2", name: "External SSD 1TB", sold: 41, turnover: 12300 },
  { id: "P-105", userId: "u2", name: "Mechanical Keyboard Pro", sold: 27, turnover: 12150 },
  { id: "P-106", userId: "u2", name: "USB-C Docking Station", sold: 30, turnover: 9900 },
];