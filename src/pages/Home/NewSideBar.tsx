import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Logo from "../../components/Navigation/Logo";
import { routes } from "./data";
import "./sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { useWindowSize } from "../../hooks";
const NewSideBar = ({ onClick }: { onClick?: () => void }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();

  console.log(width);
  return (
    <div className="newsidebar">
      {/* Sidebar Overlay */}
      {width <= 780 && (
        <div className="bars">
          <button onClick={onClick}>
            <FaTimes />
          </button>
        </div>
      )}

      <div className="logo">
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
