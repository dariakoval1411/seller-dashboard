import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { ReviewsList } from "@/shared/ui/organisms/ReviewsList/ReviewsList";

export function ReviewsPage() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="page-title">{t("nav.reviews")}</h1>
      <ReviewsList />
    </div>
  );
}