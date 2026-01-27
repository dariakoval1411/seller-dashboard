import { Button } from "@/shared/ui/atoms";

type Metric = "turnover" | "count";

type MetricSwitchProps = {
  value: Metric;
  onChange: (metric: Metric) => void;
};

export const MetricSwitch = ({ value, onChange }: MetricSwitchProps) => {
  return (
    <div className="metric-switch">
      <Button
        variant={value === "turnover" ? "primary" : "ghost"}
        onClick={() => onChange("turnover")}
      >
        Turnover
      </Button>

      <Button
        variant={value === "count" ? "primary" : "ghost"}
        onClick={() => onChange("count")}
      >
        Count
      </Button>
    </div>
  );
};