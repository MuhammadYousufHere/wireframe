import { FC, memo } from 'react';
import { BProps } from './button.d';
import { RiDownload2Fill } from 'react-icons/ri';
import './style.scss';
const Button: FC<BProps> = memo((props) => {
  const { title, variant, withIcon, disabled, type, onClick } = props;
  return (
    <button
      className={`btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
      {withIcon && <RiDownload2Fill />}
    </button>
  );
});

export default Button;
