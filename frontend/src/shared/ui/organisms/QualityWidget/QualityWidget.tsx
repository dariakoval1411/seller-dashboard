import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms/Text";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { qualityMock } from "../../../../mock/quality";

export function QualityWidget() {
  const { t } = useLanguage();

  const { onTimeRate, defectRate, returnRate } = qualityMock;

  // простой "прогресс-бар" без новых CSS классов
  const barOuter: React.CSSProperties = {
    height: 10,
    borderRadius: 999,
    border: "1px solid var(--border)",
    background: "var(--input-bg)",
    overflow: "hidden",
    marginTop: 8,
  };

  const barInner: React.CSSProperties = {
    height: "100%",
    width: `${Math.max(0, Math.min(100, onTimeRate))}%`,
    background: "var(--primary)",
  };

  return (
    <WidgetCard title={t("widgets.quality.title")}>
      <Text style={{ opacity: 0.85 }}>
        {t("widgets.quality.onTime")}: <b>{onTimeRate}%</b>
      </Text>

      <div style={barOuter}>
        <div style={barInner} />
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <Text style={{ opacity: 0.85 }}>{t("widgets.quality.defects")}</Text>
          <Text><b>{defectRate}%</b></Text>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <Text style={{ opacity: 0.85 }}>{t("widgets.quality.returns")}</Text>
          <Text><b>{returnRate}%</b></Text>
        </div>
      </div>
    </WidgetCard>
  );
}
