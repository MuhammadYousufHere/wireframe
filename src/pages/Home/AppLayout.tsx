import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navigation";
import Sidebar from "./Sidebar";
import "./style.scss";
const AppLayout = () => {
  const [show, setShow] = useState(false);

  const body = window.document.body;

  const sidebarHandler = () => {
    setShow(!show);
    if (!show) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };
  return (
    <>
      <Navbar onClick={() => setShow(!show)} />
      <div className="home" style={{}}>
        <Sidebar
          style={{
            transform: show ? "translate(0%, 0)" : "translate(-100%,0)",
          }}
          onClick={sidebarHandler}
        />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
