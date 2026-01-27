import { OrdersTable } from "@/shared/ui/organisms/OrdersTable/OrdersTable";
import { useLanguage } from "@/features/i18n/model/LanguageContext";

export function OrdersPage() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="page-title">{t("nav.orders")}</h1>
      <OrdersTable />
    </div>
  );
}