import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navigation";
import Sidebar from "./Sidebar";
import "./style.scss";
const AppLayout = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Navbar onClick={() => setShow(!show)} />
      <div className="home" style={{ paddingLeft: !show ? "0px" : "370px" }}>
        <Sidebar
          style={{
            transform: show ? "translate(0%, 0)" : "translate(-100%,0)",
          }}
          onClick={() => setShow(!show)}
        />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
