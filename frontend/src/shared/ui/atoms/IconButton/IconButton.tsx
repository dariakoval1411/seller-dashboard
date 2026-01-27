import React from "react";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
};

export const IconButton = ({
  icon,
  onClick,
  ariaLabel,
  className = "",
}: IconButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`icon-btn ${className}`}
    >
      {icon}
    </button>
  );
};