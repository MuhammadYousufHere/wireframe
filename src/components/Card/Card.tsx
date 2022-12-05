import { FC } from "react";
import { BProps } from "./types.d";
import "./style.scss";
const Card: FC<BProps> = (props) => {
  const { children } = props;
  return (
    <div className="card-container">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
