import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { ordersMock } from "../../../../mock/orders";

function statusLabel(status: string) {
  switch (status) {
    case "NEW": return "NEW";
    case "PAID": return "PAID";
    case "SHIPPED": return "SHIPPED";
    case "CANCELLED": return "CANCELLED";
    default: return status;
  }
}

export function OrdersWidget() {
  const { t } = useLanguage();

  const totalOrders = ordersMock.length;
  const last3 = ordersMock.slice(0, 3);

  return (
    <WidgetCard title={t("widgets.orders.title")}>
      <Text style={{ opacity: 0.8 }}>{t("widgets.orders.total")}: {totalOrders}</Text>

      <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
        {last3.map((o) => (
          <div key={o.id} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <Text>{o.id}</Text>
            <Text style={{ opacity: 0.8 }}>{statusLabel(o.status)}</Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}