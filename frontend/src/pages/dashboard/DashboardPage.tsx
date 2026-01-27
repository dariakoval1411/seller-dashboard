import { Text } from "@/shared/ui/atoms/Text";
import { DashboardGrid, OrdersWidget, ReviewsWidget, QualityWidget, RankingWidget, TipsWidget } from "@/shared/ui/organisms";
import { SalesChartWidget } from "../../shared/ui/organisms";

export function DashboardPage() {
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