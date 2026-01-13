import { useLanguage } from "../../context/LanguageContext";

export const QualityWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetQuality")}</div>
      <p>Ocena jakości: -- / --</p>
      <p>Kategoria: brak danych</p>
      <p>3 najsłabsze aspekty: (placeholder)</p>
    </div>
  );
};