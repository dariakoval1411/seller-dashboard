import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms/Text";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { rankingMock } from "../../../../mock/ranking";
import { useAuth } from "../../../../features/auth";

function formatMoneyPLN(value: number) {
  return `${value.toFixed(0)} PLN`;
}

export function RankingWidget() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const userRanking = rankingMock.filter((x) => x.userId === user.id);
  const top = userRanking.slice(0, 5);

  return (
    <WidgetCard title={t("widgets.ranking.title")}>
      <div style={{ display: "grid", gap: 10 }}>
        {top.map((item, idx) => (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "24px 1fr auto",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ opacity: 0.8 }}>{idx + 1}</Text>

            <div style={{ display: "grid", gap: 2 }}>
              <Text>{item.name}</Text>
              <Text style={{ opacity: 0.75, fontSize: 12 as any }}>
                {t("widgets.ranking.sold")}: {item.sold}
              </Text>
            </div>

            <Text style={{ fontWeight: 700 as any }}>
              {formatMoneyPLN(item.turnover)}
            </Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
