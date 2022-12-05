import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './style.scss';
const AppLayout = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
