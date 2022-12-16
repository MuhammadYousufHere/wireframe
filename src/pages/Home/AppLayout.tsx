import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navigation";
import { useWindowSize } from "../../hooks";
import Sidebar from "./Sidebar";
import "./style.scss";
const AppLayout = () => {
  const [show, setShow] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= 480) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);
  const sidebarHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar onClick={() => setShow(!show)} />
      <div className="home" style={{}}>
        <Sidebar
          style={{
            transform: show ? "translate(-100%,0)" : "translate(0%, 0)",
          }}
          onClick={sidebarHandler}
        />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
