import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type SubNavProps = {
  isDesktopOrLaptop?: boolean;
  showSubNav?: boolean;
  setShowSubNav?: () => void;
};

function SubNav(props: SubNavProps) {
  const { isDesktopOrLaptop, showSubNav, setShowSubNav } = props;
  const showSub = isDesktopOrLaptop ? isDesktopOrLaptop : showSubNav;
  const list = [
    {
      onClick: setShowSubNav,
      to: "/",
      title: "TODAY"
    },
    {
      onClick: () => "",
      to: "/hourly",
      title: "HOURLY"
    },
    {
      onClick: () => "",
      to: "/daily",
      title: "DAILY"
    },
    {
      onClick: () => "",
      to: "/monthly",
      title: "MONTHLY"
    }
  ];

  if (showSub) {
    return (
      <div className="menu-subnav">
        <ul className="subnav-ul">
          {list.map((item) => (
            <li
              className={`${
                window.location.pathname === item.to
                  ? "menu-subnav-selected"
                  : ""
              }`}
              key={item.title}
            >
              <Link onClick={item.onClick} className="subnav-link" to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default SubNav;
