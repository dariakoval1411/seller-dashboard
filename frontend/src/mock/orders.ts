export type OrderStatus = "NEW" | "PAID" | "SHIPPED" | "CANCELLED";

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: OrderStatus;
  date: string; // YYYY-MM-DD
};

export const ordersMock: Order[] = [
  { id: "ORD-1001", customer: "Anna Nowak", total: 189.9, status: "NEW", date: "2026-01-20" },
  { id: "ORD-1002", customer: "John Smith", total: 79.0, status: "PAID", date: "2026-01-21" },
  { id: "ORD-1003", customer: "Kasia Kowalska", total: 249.5, status: "SHIPPED", date: "2026-01-22" },
  { id: "ORD-1004", customer: "Marek Zieliński", total: 59.9, status: "CANCELLED", date: "2026-01-22" },
  { id: "ORD-1005", customer: "Olivia Brown", total: 129.0, status: "PAID", date: "2026-01-23" },
]

