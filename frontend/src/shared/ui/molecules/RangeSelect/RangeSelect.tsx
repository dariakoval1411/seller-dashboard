import { Select } from "@/shared/ui/atoms";
import { useLanguage } from "@/features/i18n/model/LanguageContext";

export type Range = "7d" | "30d" | "90d";

type RangeSelectProps = {
  value: Range;
  onChange: (value: Range) => void;
};

export const RangeSelect = ({ value, onChange }: RangeSelectProps) => {
  const { t } = useLanguage();

  return (
    <Select
      value={value}
      onChange={(v) => onChange(v as Range)}
      options={[
        { value: "7d", label: t("widgets.sales.range.7d") },
        { value: "30d", label: t("widgets.sales.range.30d") },
        { value: "90d", label: t("widgets.sales.range.90d") },
      ]}
    />
  );
};
