export type OrderStatus = "NEW" | "PAID" | "SHIPPED" | "CANCELLED";

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
  date: string; // YYYY-MM-DD
  userId: string;
};

export const ordersMock: Order[] = [
  { id: "ORD-1001", userId: "u1", customer: "Anna Nowak", total: 189.9, status: "NEW", date: "2026-01-20" },
  { id: "ORD-1002", userId: "u1", customer: "John Smith", total: 79.0, status: "PAID", date: "2026-01-21" },
  { id: "ORD-1003", userId: "u1", customer: "Kasia Kowalska", total: 249.5, status: "SHIPPED", date: "2026-01-22" },
  { id: "ORD-1004", userId: "u1", customer: "Marek Zieliński", total: 59.9, status: "CANCELLED", date: "2026-01-22" },
  { id: "ORD-1005", userId: "u1", customer: "Olivia Brown", total: 129.0, status: "PAID", date: "2026-01-23" },

  { id: "ORD-2001", userId: "u2", customer: "Peter Parker", total: 310.0, status: "PAID", date: "2026-01-22" },
  { id: "ORD-2002", userId: "u2", customer: "Mary Jane", total: 99.0, status: "NEW", date: "2026-01-23" },
  { id: "ORD-2003", userId: "u2", customer: "Bruce Wayne", total: 1250.0, status: "SHIPPED", date: "2026-01-24" },
  { id: "ORD-2004", userId: "u2", customer: "Clark Kent", total: 149.0, status: "PAID", date: "2026-01-24" },
];