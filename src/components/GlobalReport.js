import React, { useContext } from "react";
import Moment from "react-moment";

import Loader from "../assets/Loader.gif";
import Overlay from "./Overlay";
import { CoronaCasesContext } from "../context/CoronaCasesContext";

const GlobalReport = () => {
  const coronaCasesContext = useContext(CoronaCasesContext);
  const globalReport = coronaCasesContext.globalReport;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Overlay />
          <div className="global-content">
            {!globalReport.cases ? (
              <img src={Loader} alt="Loader" style={{ marginTop: "10em" }} />
            ) : (
              <div className="userContent">
                <h1>Global Report</h1>
                <span className="yellow-text accent-2">
                  Last Updated on : <Moment date={globalReport.updated} />
                </span>
                <table
                  style={{ marginTop: "5em" }}
                  className="blue-grey darken-4 centered responsive-table"
                >
                  <thead>
                    <tr style={{ color: "#fff", fontSize: "1.5em" }}>
                      <th>Cases</th>
                      <th>Deaths</th>
                      <th>Recovered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span
                          style={{
                            color: "#C70039",
                            fontSize: "1.5em"
                          }}
                          className="red-text accent-4"
                        >
                          {Number(globalReport.cases).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            color: "#C70039",
                            fontSize: "1.5em"
                          }}
                          className="red-text accent-4"
                        >
                          {Number(globalReport.deaths).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        <span
                          style={{
                            color: "#C70039",
                            fontSize: "1.5em"
                          }}
                          className="red-text accent-4"
                        >
                          {Number(globalReport.recovered).toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReport;
