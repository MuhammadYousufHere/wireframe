import { FC, memo, useRef } from 'react';
import useOnClickOutside from '../../hooks/useClickOutside';
import './dropdown.scss';
import { BDropdownProps } from './types.d';
const Dropdown: FC<BDropdownProps> = memo((props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const closeHandler = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  useOnClickOutside(containerRef, closeHandler);
  const { label, id } = props;
  return (
    <div
      className='dropdown'
      ref={containerRef}
    >
      <label
        htmlFor={id}
        className='dropdown__content'
      >
        <span>{label}</span>
        <>
          <input
            type='checkbox'
            className='dropdown__switch'
            ref={checkboxRef}
            id={id}
            hidden
          />
          <label
            htmlFor={id}
            className='dropdown__options-filter'
          >
            <ul
              className='dropdown__filter'
              role='listbox'
              tabIndex={-1}
            >
              <li
                className='dropdown__filter-selected'
                aria-selected
                role={'option'}
              >
                Default option
              </li>
              <li>
                <ul className='dropdown__select'>
                  <li
                    className='dropdown__select-option'
                    role={'option'}
                    aria-selected
                  >
                    Option 1
                  </li>
                  <li
                    className='dropdown__select-option'
                    role='option'
                    aria-selected
                  >
                    Option 2
                  </li>
                </ul>
              </li>
            </ul>
          </label>
        </>
      </label>
    </div>
  );
});

export default Dropdown;
