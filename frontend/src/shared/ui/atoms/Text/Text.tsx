import React from "react";

type TextVariant = "body" | "title" | "subtitle" | "caption";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Text = ({
  children,
  variant = "body",
  as: Component = "span",
  className = "",
}: TextProps) => {
  return (
    <Component className={`text text-${variant} ${className}`}>
      {children}
    </Component>
  );  
};