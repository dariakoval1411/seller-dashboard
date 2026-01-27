export type TipItem = {
  id: string;
  type: "info" | "warning" | "success";
  title: string;
  text: string;
};

export const tipsMock: TipItem[] = [
  { id: "T-1", type: "info", title: "Update your product photos", text: "Better images increase conversion." },
  { id: "T-2", type: "warning", title: "Low stock", text: "2 products are running low. Restock soon." },
  { id: "T-3", type: "success", title: "Great rating!", text: "Your average rating is above 4.5 this month." },
];