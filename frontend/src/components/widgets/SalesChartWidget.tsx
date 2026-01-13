import { useLanguage } from "../../context/LanguageContext";

export const SalesChartWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetSalesChart")}</div>
      <p>Tu będzie wykres sprzedaży (placeholder).</p>
      <p style={{ fontSize: "0.8rem", marginTop: 8 }}>
        (Przełączniki miary, zakresu czasu i typu wykresu dodamy później)
      </p>
    </div>
  );
};