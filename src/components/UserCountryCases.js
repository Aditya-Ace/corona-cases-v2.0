import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

import Loader from "../assets/Loader.gif";

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
    <>
      <Overlay />
      <div className="userCountryCases-content">
        <span style={{ color: "#FFC300" }}>
          Last Updated on :
          <Moment date={coronaCasesContext.globalReport.updated} />
        </span>
        {!userCountryName || !userCountryData ? (
          <img src={Loader} alt="Loader" />
        ) : (
          <>
            <h1>Cases in {userCountryName}</h1>
            {userCountryData.map(countryData => {
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
          </>
        )}
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/globalreport" className="btn">
          Global Report
        </Link>
        <Link to="/searchothercountries" className="btn">
          Search in other countries
        </Link>
      </div>
    </>
  );
};

export default UserCountryCases;
