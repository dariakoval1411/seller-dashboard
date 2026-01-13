import { useLanguage } from "../../context/LanguageContext";

export const OrdersWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetOrders")}</div>
      <p>Nieopłacone: 0</p>
      <p>Niewysłane: 0</p>
      <p>Zwroty: 0</p>
      <p style={{ marginTop: 8, fontSize: "0.8rem" }}>
        (Tu będzie komunikat lub link do strony zamówień)
      </p>
    </div>
  );
};