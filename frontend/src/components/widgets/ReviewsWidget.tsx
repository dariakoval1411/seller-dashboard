import { useLanguage } from "../../context/LanguageContext";

export const ReviewsWidget = () => {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-title">{t("widgetReviews")}</div>
      <p>Brak opinii (placeholder)</p>
    </div>
  );
};