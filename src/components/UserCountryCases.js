import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "../assets/Loader.gif";
import Overlay from "./Overlay";

const UserCountryCases = () => {
  const [userCountryName, setUserCountryName] = useState("");
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchUserCountryCase = async () => {
      let urlForUserCountry = process.env.REACT_APP_URL_USER_COUNTRY_API;
      let key = process.env.REACT_APP_SECRET_KEY;
      let urlForGlobalReport = process.env.REACT_APP_WORLD_REPORT_API;

      const responseFromUserCountry = await axios(`${urlForUserCountry}${key}`);
      setUserCountryName(responseFromUserCountry.data.country_name);

      if (userCountryName.length > 2) {
        const responseFromCorona = await axios(
          `${urlForGlobalReport}countries`
        );
        const userLocationResult = responseFromCorona.data.map(data => data);
        setCountriesData(
          userLocationResult.filter(data => data.country === userCountryName)
        );
        if (userCountryName.includes("United States")) {
          setCountriesData(
            userLocationResult.filter(data => data.country === "USA")
          );
        }
      }
    };
    fetchUserCountryCase();
  }, [userCountryName]);
  return (
    <>
      <Overlay />
      <div className="userCountryCases-content">
        {!userCountryName && !countriesData ? (
          <img src={Loader} alt="Loader" />
        ) : (
          <>
            <h1>Cases in {userCountryName}</h1>
            {console.log(countriesData)}
            {countriesData.map(countryData => {
              return (
                <div
                  key={countryData.countryInfo._id}
                  className="userCountryCases"
                >
                  <img
                    src={countryData.countryInfo.flag}
                    alt="UserCountry Flag"
                  />
                  <h5>Total Cases:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.cases).toLocaleString()}
                  </p>
                  <h5>Today's Cases:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.todayCases).toLocaleString()}
                  </p>
                  <h5>Deaths:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.deaths).toLocaleString()}
                  </p>
                  <h5>Today's Deaths:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.todayDeaths).toLocaleString()}
                  </p>
                  <h5>Recovered:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.recovered).toLocaleString()}
                  </p>
                  <h5>Active Cases:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.active).toLocaleString()}
                  </p>
                  <h5>Critical:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.critical).toLocaleString()}
                  </p>
                  <h5>Cases per 1 Million:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.casesPerOneMillion).toLocaleString()}
                  </p>
                  <h5>Deaths per 1 Million:</h5>
                  <p style={{ color: "#C70039" }}>
                    {Number(countryData.deathsPerOneMillion).toLocaleString()}
                  </p>
                </div>
              );
            })}
            {/*
             */}
            <Link to="/" className="btn">
              Home
            </Link>
            <Link to="/globalreport" className="btn">
              Global Report
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default UserCountryCases;
