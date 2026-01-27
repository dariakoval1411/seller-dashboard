import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { QualitySummary } from "@/shared/ui/organisms/QualitySummary/QualitySummary";

export function QualityPage() {
  const { t } = useLanguage();
  return (
    <div>
      <h1 className="page-title">{t("nav.quality")}</h1>
      <QualitySummary />
    </div>
  );
}