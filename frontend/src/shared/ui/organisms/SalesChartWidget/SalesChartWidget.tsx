import { useMemo, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { WidgetCard } from "@/shared/ui/organisms/WidgetCard/WidgetCard";
import { useLanguage } from "@/features/i18n/model/LanguageContext";
import { RangeSelect, type Range } from "@/shared/ui/molecules/RangeSelect/RangeSelect";
import { MetricSwitch, type Metric } from "@/shared/ui/molecules/MetricSwitch/MetricSwitch";
import { salesMock } from "../../../../mock/sales";

function sliceByRange(range: Range) {
  const n = range === "7d" ? 7 : range === "30d" ? 30 : 90;
  return salesMock.slice(-n);
}

function formatDateLabel(iso: string) {
  return iso.slice(5);
}

export function SalesChartWidget() {
  const { t } = useLanguage();

  const [metric, setMetric] = useState<Metric>("turnover");
  const [range, setRange] = useState<Range>("30d");

  const data = useMemo(() => sliceByRange(range), [range]);

  const headerRight = (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
      <MetricSwitch value={metric} onChange={setMetric} />
      <RangeSelect value={range} onChange={setRange} />
    </div>
  );

  return (
    <WidgetCard title={t("widgets.sales.title")} right={headerRight} span={3}>
      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
            <XAxis dataKey="date" tickFormatter={formatDateLabel} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={metric} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
