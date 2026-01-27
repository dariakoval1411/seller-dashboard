import { Button } from "@/shared/ui/atoms";
import { useLanguage } from "../../../../features/i18n";


export type Metric = "turnover" | "quantity";

type Props = {
  value: Metric;
  onChange: (m: Metric) => void;
};

export function MetricSwitch({ value, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Button
        variant={value === "turnover" ? "primary" : "outline"}
        onClick={() => onChange("turnover")}
      >
        {t("widgets.sales.metric.turnover")}
      </Button>

      <Button
        variant={value === "quantity" ? "primary" : "outline"}
        onClick={() => onChange("quantity")}
      >
        {t("widgets.sales.metric.quantity")}
      </Button>
    </div>
  );
}
