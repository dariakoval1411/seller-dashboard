import { DashboardGrid } from "@/shared/ui/organisms/DashboardGrid/DashboardGrid";
import {
  SalesChartWidget,
  OrdersWidget,
  ReviewsWidget,
  QualityWidget,
  RankingWidget,
  TipsWidget,
} from "@/shared/ui/organisms";

export function DashboardTemplate() {
  return (
    <DashboardGrid>
      <SalesChartWidget />
      <OrdersWidget />
      <ReviewsWidget />
      <QualityWidget />
      <RankingWidget />
      <TipsWidget />
    </DashboardGrid>
  );
}