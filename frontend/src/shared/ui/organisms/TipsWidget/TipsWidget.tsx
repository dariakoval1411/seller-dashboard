import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { Text } from "@/shared/ui/atoms/Text";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { tipsMock } from "../../../../mock/tips";
import { useAuth } from "../../../../features/auth";

function typeLabelKey(type: string) {
  switch (type) {
    case "info": return "widgets.tips.info";
    case "warning": return "widgets.tips.warning";
    case "success": return "widgets.tips.success";
    default: return "widgets.tips.info";
  }
}

export function TipsWidget() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const tips = tipsMock.filter(t => t.userId === user.id);

  return (
    <WidgetCard title={t("widgets.tips.title")}>
      <div style={{ display: "grid", gap: 10 }}>
        {tips.map((tip) => (
          <div
            key={tip.id}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 10,
              background: "var(--input-bg)",
              display: "grid",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <Text style={{ fontWeight: 700 as any }}>{tip.title}</Text>
              <Text style={{ opacity: 0.75 }}>{t(typeLabelKey(tip.type))}</Text>
            </div>

            <Text style={{ opacity: 0.85 }}>{tip.text}</Text>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}