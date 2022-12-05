import { Navigation } from 'react-minimal-side-navigation';
import { useNavigate, useLocation } from 'react-router-dom';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Logo from '../../components/Navigation/Logo';
import { routes } from './data';
import './sidebar.scss';
const NewSideBar = () => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <div className='newsidebar'>
      {/* Sidebar Overlay */}

      <div className='logo'>
        <Logo />
      </div>

      {/* Sidebar */}
      <div>
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigation(itemId);
          }}
          items={routes}
        />
      </div>
    </div>
  );
};

export default NewSideBar;
