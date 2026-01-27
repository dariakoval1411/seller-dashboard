import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { ordersMock } from "../../../../mock/orders";
import { useAuth } from "../../../../features/auth";
import { Badge } from "../../atoms";

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
  const { user } = useAuth();

  const userOrders = ordersMock.filter(o => o.userId === user.id);

  const totalOrders = userOrders.length;
  const last3 = ordersMock.slice(0, 3);

  return (
    <WidgetCard title={t("widgets.orders.title")}>
      <Text style={{ opacity: 0.8 }}>{t("widgets.orders.total")}: {totalOrders}</Text>

      <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
        {last3.map((o) => (
          <div key={o.id} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <Text>{o.id}</Text>
            <Badge
              label={o.status}
              tone={
                o.status === "PAID"
                  ? "success"
                  : o.status === "NEW"
                    ? "warning"
                    : o.status === "CANCELLED"
                      ? "danger"
                      : "neutral"
              }
            />
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}