import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
};

export const Select = ({
  value,
  options,
  onChange,
  className = "",
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`select ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};