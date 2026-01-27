import { reviewsMock } from "@/mock/reviews";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { ReviewItem } from "@/shared/ui/molecules/ReviewItem/ReviewItem";

export function ReviewsList() {
  const { t } = useLanguage();

  return (
    <section className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <h2 style={{ margin: 0 }}>{t("reviews.title")}</h2>
        <span style={{ opacity: 0.75 }}>{t("reviews.total")}: {reviewsMock.length}</span>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
        {reviewsMock.map((r) => (
          <ReviewItem key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}