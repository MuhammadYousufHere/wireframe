// import { useEffect, useRef, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import React, { CSSProperties } from "react";
import NewSideBar from "./NewSideBar";
import "./sidebar.scss";

// const sidebarNavItems = [
//   {
//     display: 'Backtesting',
//     to: '/',
//     section: '',
//   },
//   {
//     display: 'Parameter Optimization',
//     to: '/parameters-opt',
//     section: 'parameters-opt',
//   },
//   {
//     display: 'Market Data',
//     to: '/market-data',
//     section: 'market-data',
//     sub: [
//       {
//         display: 'Convert To new Timeframe',
//         to: '/convert-timeframe',
//         section: 'convert-timeframe',
//       },
//       {
//         display: 'Download to CSV',
//         to: '/download-to-csv',
//         section: 'download-to-csv',
//       },

//       {
//         display: 'Upload from Broker API',
//         to: '/upload-from-broker-api',
//         section: 'upload-from-broker-api',
//       },
//       {
//         display: 'Upload from CSV',
//         to: '/upload-from-csv',
//         section: 'upload-from-csv',
//       },
//       {
//         display: 'Deletion',
//         to: '/deletion',
//         section: 'deletion',
//       },
//       {
//         display: 'Purge from Database',
//         to: '/purge-from-database',
//         section: 'purge-from-database',
//       },
//     ],
//   },
//   {
//     display: 'Pip Conversion',
//     to: '/pip-conversion',
//     section: 'pip-conversion',
//   },
// ];

const Sidebar = ({
  style,
  onClick,
}: {
  style?: CSSProperties;
  onClick: () => void;
}) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [stepHeight, setStepHeight] = useState(0);
  // const sidebarRef = useRef<HTMLDivElement>(null);
  // const indicatorRef = useRef<HTMLDivElement>(null);
  // const location = useLocation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (sidebarRef.current && indicatorRef.current) {
  //       const sidebarItem = sidebarRef.current.querySelector(
  //         '.sidebar__menu__item'
  //       )!;
  //       indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
  //       setStepHeight(sidebarItem.clientHeight);
  //     }
  //   }, 50);
  // }, []);

  // change active index
  // useEffect(() => {
  //   const curPath = window.location.pathname.split('/')[1];
  //   const activeItem = sidebarNavItems.findIndex(
  //     (item) => item.section === curPath
  //   );
  //   setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  // }, [location]);

  return (
    <div className="sidebar" style={style}>
      {/* <div className='sidebar__logo'></div>
      <div
        ref={sidebarRef}
        className='sidebar__menu'
      >
        <div
          ref={indicatorRef}
          className='sidebar__menu__indicator'
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
          >
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className='sidebar__menu__item__text'>{item.display}</div>
              {item.sub &&
                item.sub.map((subItem, subIndex) => {
                  return (
                    <div className='sidebar__submenu__item__text'>
                      {subItem.display}
                    </div>
                  );
                })}
            </div>
          </Link>
        ))}
      </div> */}
      <NewSideBar onClick={onClick} />
    </div>
  );
};

export default Sidebar;
