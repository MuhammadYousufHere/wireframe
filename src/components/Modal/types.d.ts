import React from "react";
export interface BModalProps {
  show?: boolean;
  setShow(value: boolean?): void;
  children?: JSX.Element | React.ReactNode;
}
