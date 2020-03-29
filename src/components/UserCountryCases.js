import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Moment from "react-moment";

import Overlay from "./Overlay";
import { CoronaCasesContext } from "../context/CoronaCasesContext";

const UserCountryCases = () => {
  const [userCountryName, setUserCountryName] = useState("");
  const [userCountryData, setUserCountryData] = useState([]);
  const coronaCasesContext = useContext(CoronaCasesContext);
  const allCountriesData = coronaCasesContext.countriesData;
  useEffect(() => {
    const fetchUserCountryCase = async () => {
      let urlForUserCountry = process.env.REACT_APP_URL_USER_COUNTRY_API;
      let key = process.env.REACT_APP_SECRET_KEY;

      const responseFromUserCountry = await axios(`${urlForUserCountry}${key}`);
      setUserCountryName(responseFromUserCountry.data.country_name);
      const userLocationResult = allCountriesData.map(data => data);
      setUserCountryData(
        userLocationResult.filter(data => data.country === userCountryName)
      );
      if (userCountryName.includes("United States")) {
        setUserCountryData(
          userLocationResult.filter(data => data.country === "USA")
        );
      }
    };
    fetchUserCountryCase();
  }, [allCountriesData, userCountryName]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Overlay />
          <div className="userCountryCases-content">
            {!userCountryName || !userCountryData ? (
              <div className="progress" style={{ marginTop: "10em" }}>
                <div className="indeterminate"></div>
              </div>
            ) : (
              <div className="userContent">
                <h1>Cases in {userCountryName}</h1>
                <span style={{ color: "#FFC300" }}>
                  Last Updated on:{" "}
                  <Moment date={coronaCasesContext.globalReport.updated} />
                </span>
                {userCountryData.map(countryData => {
                  return (
                    <div key={countryData.countryInfo._id}>
                      <img
                        src={countryData.countryInfo.flag}
                        alt="UserCountry Flag"
                        width="100px"
                        height="50px"
                        style={{ marginTop: "0.5em" }}
                      />
                      <div className="userContent-1">
                        <table className="blue-grey darken-4 centered responsive-table">
                          <thead>
                            <tr style={{ color: "#fff", fontSize: "1.5em" }}>
                              <th>Total Cases</th>
                              <th>Today's Cases</th>
                              <th>Deaths</th>
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
                                >
                                  {Number(countryData.cases).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(
                                    countryData.todayCases
                                  ).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(countryData.deaths).toLocaleString()}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="userContent-2">
                        <table className="blue-grey darken-4 centered responsive-table">
                          <thead>
                            <tr style={{ color: "#fff", fontSize: "1.5em" }}>
                              <th>Today's Deaths</th>
                              <th>Recovered</th>
                              <th>Active Cases</th>
                              <th>Critical</th>
                              <th>Cases per 1 Million</th>
                              <th>Deaths per 1 Million</th>
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
                                >
                                  {Number(
                                    countryData.todayDeaths
                                  ).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(
                                    countryData.recovered
                                  ).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(countryData.active).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(
                                    countryData.critical
                                  ).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(
                                    countryData.casesPerOneMillion
                                  ).toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color: "#C70039",
                                    fontSize: "1.5em"
                                  }}
                                >
                                  {Number(
                                    countryData.deathsPerOneMillion
                                  ).toLocaleString()}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCountryCases;
