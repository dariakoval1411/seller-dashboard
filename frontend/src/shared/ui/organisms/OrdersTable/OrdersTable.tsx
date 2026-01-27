import { ordersMock } from "@/mock/orders";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { OrderRow } from "@/shared/ui/molecules/OrderRow/OrderRow";

export function OrdersTable() {
  const { t } = useLanguage();

  return (
    <section className="card table-card">
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr className="table-head-row">
              <th className="table-head">{t("orders.table.id")}</th>
              <th className="table-head">{t("orders.table.customer")}</th>
              <th className="table-head">{t("orders.table.total")}</th>
              <th className="table-head">{t("orders.table.status")}</th>
              <th className="table-head">{t("orders.table.date")}</th>
            </tr>
          </thead>

          <tbody>
            {ordersMock.map((o) => (
              <OrderRow key={o.id} order={o} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}