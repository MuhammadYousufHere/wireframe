import React, { FC } from 'react';
import './style.scss';
interface Props {
  children: React.ReactNode | JSX.Element;
}
const Wrapper: FC<Props> = ({ children }) => {
  return <div className='wrapper'>{children}</div>;
};

export default Wrapper;
