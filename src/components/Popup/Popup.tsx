import { FC } from "react";
import { Card } from "../Card";
import { FaTimes } from "react-icons/fa";
import { BPopupProps } from "./type.d";
import "./style.scss";
const Popup: FC<BPopupProps> = (props) => {
  const { onClose, title, children } = props;
  return (
    <Card>
      <div className="top">
        <div className="left"></div>
        <div className="center">{title}</div>
        <div className="right" onClick={onClose}>
          <FaTimes />
        </div>
      </div>
      <div className="pop__content">{children}</div>
    </Card>
  );
};

export default Popup;
