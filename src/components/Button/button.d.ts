import React from "react";

export type BVariantProps = {
  variant: keyof typeof BVariant;
};
export interface BProps {
  title: string;
  variant?: BVariantProps["variant"];
  withIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  Tag?: "button" | "input";
  inputType?: React.HTMLInputTypeAttribute;
}

export const BVariant = {
  primary: "primary",
  secondary: "secondary",
  outlined: "outlined",
  text: "text",
  link: "link",
  pill: "pill",
};
