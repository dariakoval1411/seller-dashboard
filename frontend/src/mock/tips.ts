export type TipItem = {
  id: string;
  userId: string;
  type: "info" | "warning" | "success";
  title: string;
  text: string;
};

export const tipsMock: TipItem[] = [
  // ===== USER u1 =====
  {
    id: "T-1",
    userId: "u1",
    type: "info",
    title: "Update product photos",
    text: "High-quality images can increase conversion by up to 30%."
  },
  {
    id: "T-2",
    userId: "u1",
    type: "warning",
    title: "Low stock alert",
    text: "3 products are running low. Consider restocking soon."
  },
  {
    id: "T-3",
    userId: "u1",
    type: "success",
    title: "Sales growth",
    text: "Your sales increased by 18% compared to last week."
  },
  {
    id: "T-4",
    userId: "u1",
    type: "info",
    title: "Enable promotions",
    text: "Limited-time discounts can attract more customers."
  },
  {
    id: "T-5",
    userId: "u1",
    type: "warning",
    title: "Unanswered reviews",
    text: "You have 2 customer reviews waiting for a response."
  },

  // ===== USER u2 =====
  {
    id: "T-6",
    userId: "u2",
    type: "success",
    title: "Excellent rating",
    text: "Your average store rating is 4.8 this month."
  },
  {
    id: "T-7",
    userId: "u2",
    type: "info",
    title: "New customers",
    text: "15 new customers visited your store this week."
  },
  {
    id: "T-8",
    userId: "u2",
    type: "warning",
    title: "Delayed shipments",
    text: "2 orders were shipped later than expected."
  },
  {
    id: "T-9",
    userId: "u2",
    type: "info",
    title: "Try bundle offers",
    text: "Product bundles can increase average order value."
  },
  {
    id: "T-10",
    userId: "u2",
    type: "success",
    title: "Top seller product",
    text: "Your product \"Wireless Mouse\" is among top sellers."
  }
];
