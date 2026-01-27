import type { ReactNode } from "react";
import { Text } from "@/shared/ui/atoms";

type Props = {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  span?: 1 | 2 | 3;
};

export function WidgetCard({ title, right, children, span = 1 }: Props) {
  return (
    <section className="card" style={{ gridColumn: `span ${span}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <Text className="card-title">{title}</Text>
        {right ? <div>{right}</div> : null}
      </div>

      <div style={{ marginTop: 10 }}>
        {children}
      </div>
    </section>
  );
}
