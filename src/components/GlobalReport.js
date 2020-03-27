import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import Loader from "../assets/Loader.gif";

import Overlay from "./Overlay";
import { CoronaCasesContext } from "../context/CoronaCasesContext";

const GlobalReport = () => {
  const coronaCasesContext = useContext(CoronaCasesContext);
  const globalReport = coronaCasesContext.globalReport;

  return (
    <>
      <Overlay />
      <div className="global-content">
        {!globalReport.cases ? (
          <img src={Loader} alt="Loader" />
        ) : (
          <>
            <h1>Global Report</h1>
            <span style={{ color: "#FFC300" }}>
              Last Updated on : <Moment date={globalReport.updated} />
            </span>
            <h5>Cases:</h5>
            <p style={{ color: "#C70039" }}>
              {Number(globalReport.cases).toLocaleString()}
            </p>
            <h5>Deaths:</h5>
            <p style={{ color: "#C70039" }}>
              {Number(globalReport.deaths).toLocaleString()}
            </p>
            <h5>Recovered:</h5>
            <p style={{ color: "#C70039" }}>
              {Number(globalReport.recovered).toLocaleString()}
            </p>
            <Link to="/" className="btn">
              Go Back
            </Link>
            <Link to="/precautions" className="btn">
              Precautions
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default GlobalReport;
