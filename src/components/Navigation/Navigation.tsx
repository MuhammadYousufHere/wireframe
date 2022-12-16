import { FaBars, FaMoon } from "react-icons/fa";
// import Logo from "./Logo";
import "./style.scss";
const Navbar = ({ onClick }: { onClick?: () => void }) => {
  return (
    <header className="navbar-container">
      <div className="bars">
        <button onClick={onClick}>
          <FaBars size="19" />
        </button>
      </div>
      <div className="center"></div>
      <nav>
        <ul>
          <li>
            <a href="/">English</a> <span>|</span> <FaMoon size="19" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
