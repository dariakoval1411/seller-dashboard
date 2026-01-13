import { useLanguage } from "../../context/LanguageContext";

export const RankingWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetRanking")}</div>
      <p>Top 5 ofert (placeholder)</p>
    </div>
  );
};