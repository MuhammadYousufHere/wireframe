import { FC, memo, useRef } from 'react';
import { BInputProps } from './types.d';
import './style.scss';
import { FaPlus } from 'react-icons/fa';
const Input: FC<BInputProps> = memo((props) => {
  const { type, name, id, value, placeholder, label, onChange, Icon, onAdd } =
    props;
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };
  return (
    <div className='input-group'>
      <label
        htmlFor={id}
        className='input-body'
      >
        {label && <span>{label}</span>}
        <div className='input-box'>
          <input
            {...props}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            id={id}
            ref={inputRef}
          />

          <div className='icon-box'>
            {Icon ? (
              <>
                <div className='bar'></div>
                <div onClick={handleInputClick}>{Icon}</div>
              </>
            ) : (
              <div className='space'>___</div>
            )}
          </div>
        </div>
        {onAdd && (
          <div className='action'>
            <button onClick={onAdd}>
              <FaPlus />
            </button>
          </div>
        )}
      </label>
    </div>
  );
});

export default Input;
