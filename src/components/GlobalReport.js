import React, { useContext } from "react";
import Moment from "react-moment";

import Loader from "../assets/Loader.gif";

import { CoronaCasesContext } from "../context/CoronaCasesContext";

const GlobalReport = () => {
  const coronaCasesContext = useContext(CoronaCasesContext);
  const globalReport = coronaCasesContext.globalReport;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="global-content">
            {!globalReport.cases ? (
              <img src={Loader} alt="Loader" style={{ marginTop: "10em" }} />
            ) : (
              <>
                <h1>Global Report</h1>
                <span className="yellow-text accent-2">
                  Last Updated on : <Moment date={globalReport.updated} />
                </span>
                <h5>Cases:</h5>
                <p className="red-text accent-4">
                  {Number(globalReport.cases).toLocaleString()}
                </p>
                <h5>Deaths:</h5>
                <p className="red-text accent-4">
                  {Number(globalReport.deaths).toLocaleString()}
                </p>
                <h5>Recovered:</h5>
                <p className="red-text accent-4">
                  {Number(globalReport.recovered).toLocaleString()}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReport;
