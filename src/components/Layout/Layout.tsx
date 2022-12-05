import { FC, memo } from "react";
import { BLayoutProps } from "./types.d";

const Layout: FC<BLayoutProps> = memo(({ children }) => {
  return (
    <div className="layout__wrapper">
      <div className="layout__body">{children}</div>
    </div>
  );
});

export default Layout;
