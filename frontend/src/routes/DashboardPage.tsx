import { Layout } from "../components/layout/Layout";
import { OrdersWidget } from "../components/widgets/OrdersWidget";
import { QualityWidget } from "../components/widgets/QualityWidget";
import { ReviewsWidget } from "../components/widgets/ReviewsWidget";
import { RankingWidget } from "../components/widgets/RankingWidget";
import { SalesChartWidget } from "../components/widgets/SalesChartWidget";
import { TipsWidget } from "../components/widgets/TipsWidget";
import { useLanguage } from "../context/LanguageContext";

const DashboardPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="dashboard-grid">
        <OrdersWidget />
        <QualityWidget />
        <ReviewsWidget />
        <RankingWidget />
        <SalesChartWidget />
        <TipsWidget />
      </div>
    </Layout>
  );
};

export default DashboardPage;