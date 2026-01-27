import { Text, Badge } from "@/shared/ui/atoms";
import { useLanguage } from "../../../../features/i18n";
import { qualityMock } from "../../../../mock/quality";

function toneByPercentGood(onTimeRate: number) {
  if (onTimeRate >= 95) return "success";
  if (onTimeRate >= 90) return "warning";
  return "danger";
}

export function QualitySummary() {
  const { t } = useLanguage();
  const { onTimeRate, defectRate, returnRate, period } = qualityMock;

  const barStyleOuter: React.CSSProperties = {
    height: 12,
    borderRadius: 999,
    border: "1px solid var(--border)",
    background: "var(--input-bg)",
    overflow: "hidden",
    marginTop: 10,
  };

  const barStyleInner: React.CSSProperties = {
    height: "100%",
    width: `${Math.max(0, Math.min(100, onTimeRate))}%`,
    background: "var(--primary)",
  };

  return (
    <section className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <Text style={{ fontWeight: 800 as any }}>
          {t("quality.summary.title")}
        </Text>

        <Badge
          label={`${t("quality.summary.period")}: ${period.toUpperCase()}`}
          tone="neutral"
        />
      </div>

      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
          <Text style={{ opacity: 0.85 }}>{t("widgets.quality.onTime")}</Text>
          <Badge label={`${onTimeRate}%`} tone={toneByPercentGood(onTimeRate)} />
        </div>

        <div style={barStyleOuter}>
          <div style={barStyleInner} />
        </div>
      </div>

      <div style={{ marginTop: 16 }} className="quality-grid">
        <div className="quality-item">
          <Text style={{ opacity: 0.8 }}>{t("widgets.quality.defects")}</Text>
          <Text style={{ fontWeight: 800 as any }}>{defectRate}%</Text>
        </div>

        <div className="quality-item">
          <Text style={{ opacity: 0.8 }}>{t("widgets.quality.returns")}</Text>
          <Text style={{ fontWeight: 800 as any }}>{returnRate}%</Text>
        </div>

        <div className="quality-item">
          <Text style={{ opacity: 0.8 }}>{t("quality.summary.score")}</Text>
          <Text style={{ fontWeight: 800 as any }}>
            {Math.max(0, Math.round(onTimeRate - defectRate * 2 - returnRate * 3))} / 100
          </Text>
        </div>
      </div>
    </section>
  );
}