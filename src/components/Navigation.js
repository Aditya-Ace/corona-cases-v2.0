import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="brand-logo left"
            style={{ marginLeft: "5em" }}
          >
            Home
          </Link>
          <a href="#0" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/globalreport">Global Report</Link>
            </li>
            <li>
              <Link to="/precautions">Precautions</Link>
            </li>
            <li>
              <Link to="/userCountryCases">Cases in your Country</Link>
            </li>
            <li>
              <Link to="/searchothercountries">Search other countries</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/globalreport">Global Report</Link>
        </li>
        <li>
          <Link to="/precautions">Precautions</Link>
        </li>
        <li>
          <Link to="/userCountryCases">Cases in your Country</Link>
        </li>
        <li>
          <Link to="/searchothercountries">Search other countries</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
