import { Text } from "@/shared/ui/atoms/Text";
import { DashboardGrid, OrdersWidget, ReviewsWidget, QualityWidget, RankingWidget, TipsWidget } from "@/shared/ui/organisms";
import { SalesChartWidget } from "../../shared/ui/organisms";
import { useAuth } from "../../features/auth/model/AuthContext";
import { Navigate } from "react-router-dom";

export function DashboardPage() {
  const { user } = useAuth();
    if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Text as="h1">Dashboard</Text>
      <DashboardGrid>
        <OrdersWidget/>
        <ReviewsWidget/>
        <QualityWidget/>
        <TipsWidget/>
        <RankingWidget/>
        <SalesChartWidget />
      </DashboardGrid>
    </div>
  );
}