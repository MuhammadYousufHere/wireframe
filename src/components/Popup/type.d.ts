import React from "react";

export interface BPopupProps {
  title?: string;
  children?: React.ReactNode | JSX.Element | React.ReactElement;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}
