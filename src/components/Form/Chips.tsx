import { FC, memo } from 'react';
import { BChipsProps } from './types';
import './chips.scss';
import { FaTimes } from 'react-icons/fa';
const Chips: FC<BChipsProps> = memo((props) => {
  const { value, onDelete } = props;
  return (
    <div className='chips'>
      <div className='chips__content'>
        {value}

        <button
          className=''
          onClick={onDelete}
        >
          <div className='bar'></div>
          <FaTimes />
        </button>
      </div>
    </div>
  );
});

export default Chips;
