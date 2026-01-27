export type Review = {
  id: string;
  userId: string;
  customer: string;
  rating: number;
  comment: string;
  date: string;
};

export const reviewsMock: Review[] = [
  // ===== USER u1 =====
  {
    id: "REV-1",
    userId: "u1",
    customer: "Anna Nowak",
    rating: 5,
    comment: "Great quality and fast shipping.",
    date: "2026-01-23",
  },
  {
    id: "REV-2",
    userId: "u1",
    customer: "John Smith",
    rating: 4,
    comment: "Everything ok, packaging could be better.",
    date: "2026-01-22",
  },
  {
    id: "REV-3",
    userId: "u1",
    customer: "Kasia Kowalska",
    rating: 3,
    comment: "Average, delivery was late.",
    date: "2026-01-20",
  },

  // ===== USER u2 =====
  {
    id: "REV-4",
    userId: "u2",
    customer: "Marek Zieliński",
    rating: 5,
    comment: "Perfect, will buy again!",
    date: "2026-01-19",
  },
  {
    id: "REV-5",
    userId: "u2",
    customer: "Olivia Brown",
    rating: 4,
    comment: "Good experience, fast delivery.",
    date: "2026-01-21",
  },
  {
    id: "REV-6",
    userId: "u2",
    customer: "Peter Parker",
    rating: 5,
    comment: "Amazing service and quality!",
    date: "2026-01-24",
  },
];