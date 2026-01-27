import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms/Text";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { reviewsMock } from "../../../../mock/reviews";

function calcAvgRating() {
  if (reviewsMock.length === 0) return 0;
  const sum = reviewsMock.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviewsMock.length) * 10) / 10;
}

function stars(rating: number) {
  const full = "★".repeat(Math.max(0, Math.min(5, rating)));
  const empty = "☆".repeat(5 - full.length);
  return full + empty;
}

export function ReviewsWidget() {
  const { t } = useLanguage();

  const avg = calcAvgRating();
  const total = reviewsMock.length;
  const last2 = reviewsMock.slice(0, 2);

  return (
    <WidgetCard title={t("widgets.reviews.title")}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <Text style={{ opacity: 0.85 }}>
          {t("widgets.reviews.avg")}: {avg} / 5
        </Text>
        <Text style={{ opacity: 0.85 }}>
          {t("widgets.reviews.total")}: {total}
        </Text>
      </div>

      <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
        {last2.map((r) => (
          <div key={r.id} style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <Text>{r.customer}</Text>
              <Text style={{ opacity: 0.8 }}>{stars(r.rating)}</Text>
            </div>
            <Text style={{ opacity: 0.8 }}>
              {r.comment}
            </Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}