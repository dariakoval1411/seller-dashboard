import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/shared/ui/templates";

import { LoginPage } from "@/pages/login/LoginPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { OrdersPage } from "@/pages/orders/OrdersPage";
import { ReviewsPage } from "@/pages/reviews/ReviewsPage";
import { QualityPage } from "@/pages/quality/QualityPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/quality" element={<QualityPage />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};