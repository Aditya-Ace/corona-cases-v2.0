import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

import Loader from "../assets/Loader.gif";

import Overlay from "./Overlay";

const GlobalReport = () => {
  const [globalReport, setGlobalReport] = useState({});
  useEffect(() => {
    let urlForGlobalReport = process.env.REACT_APP_WORLD_REPORT_API;
    axios
      .get(`${urlForGlobalReport}all`)
      .then(res => {
        console.log(res);
        setGlobalReport(res.data);
      })
      .catch(error => console.log(error));
  }, []);

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
