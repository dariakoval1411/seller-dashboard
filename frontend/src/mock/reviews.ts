export type Review = {
  id: string;
  customer: string;
  rating: number;
  comment: string;
  date: string;
};

export const reviewsMock: Review[] = [
  { id: "REV-1", customer: "Anna Nowak", rating: 5, comment: "Great quality and fast shipping.", date: "2026-01-23" },
  { id: "REV-2", customer: "John Smith", rating: 4, comment: "Everything ok, packaging could be better.", date: "2026-01-22" },
  { id: "REV-3", customer: "Kasia Kowalska", rating: 3, comment: "Average, delivery was late.", date: "2026-01-20" },
  { id: "REV-4", customer: "Marek Zieliński", rating: 5, comment: "Perfect, will buy again!", date: "2026-01-19" },
];
