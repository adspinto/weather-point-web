import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>@2022 - Weather Point. All rights reserved.</div>
      <ul>
        <li>
          <Link className="subnav-link" to="/">
            TODAY
          </Link>
        </li>
        <li>
          <Link className="subnav-link" to="/hourly">
            HOURLY
          </Link>
        </li>
        <li>
          <Link className="subnav-link" to="/daily">
            DAILY
          </Link>
        </li>
        <li>
          <Link className="subnav-link" to="/monthly">
            MONTHLY
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
