import { Select } from "@/shared/ui/atoms";

type RangeSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export const RangeSelect = ({ value, onChange }: RangeSelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={[
        { value: "7", label: "7 days" },
        { value: "30", label: "30 days" },
        { value: "90", label: "90 days" },
      ]}
    />
  );
};