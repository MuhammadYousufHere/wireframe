import { FC, memo } from "react";
import { BProps } from "./button.d";
import { RiDownload2Fill } from "react-icons/ri";
import "./style.scss";
const Button: FC<BProps> = memo((props) => {
  const {
    title,
    variant,
    withIcon,
    disabled,
    type,
    inputType,
    onClick,
    Tag = "button",
  } = props;

  return Tag === "button" ? (
    <button
      className={`btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
      {withIcon && <RiDownload2Fill />}
    </button>
  ) : (
    <input
      className={`btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      type={inputType}
      title={title}
    >
      {withIcon && <RiDownload2Fill />}
    </input>
  );
});

export default Button;
