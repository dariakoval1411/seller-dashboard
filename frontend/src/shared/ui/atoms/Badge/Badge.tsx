type Props = {
  label: string;
  tone?: "neutral" | "success" | "warning" | "danger";
};

export function Badge({ label, tone = "neutral" }: Props) {
  return <span className={`badge badge--${tone}`}>{label}</span>;
}