import { Text, Badge } from "@/shared/ui/atoms";
import type { Order } from "../../../../mock/orders";

function toneByStatus(status: string) {
  switch (status) {
    case "PAID": return "success";
    case "SHIPPED": return "neutral";
    case "NEW": return "warning";
    case "CANCELLED": return "danger";
    default: return "neutral";
  }
}

export function OrderRow({ order }: { order: Order }) {
  return (
    <tr className="table-row">
      <td className="table-cell"><Text>{order.id}</Text></td>
      <td className="table-cell"><Text>{order.customer}</Text></td>
      <td className="table-cell"><Text>{order.total} PLN</Text></td>
      <td className="table-cell">
        <Badge label={order.status} tone={toneByStatus(order.status)} />
      </td>
      <td className="table-cell"><Text>{order.date}</Text></td>
    </tr>
  );
}