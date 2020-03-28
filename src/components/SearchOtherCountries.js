import React, { useState, useContext } from "react";

import { CoronaCasesContext } from "../context/CoronaCasesContext";

const SearchOtherCountries = () => {
  const coronaCasesContext = useContext(CoronaCasesContext);
  const [userSearchedCountry, setUserSearchedCountry] = useState([]);

  const handleSearchEventChange = e => {
    let userSearchValue;
    if (e.target.value) {
      userSearchValue = e.target.value.replace(
        /^./,
        e.target.value[0].toUpperCase()
      );
    }
    setUserSearchedCountry(
      coronaCasesContext.countriesData.filter(data =>
        data.country.includes(userSearchValue)
      )
    );

    if (userSearchValue === "America" || userSearchValue === "United States") {
      setUserSearchedCountry(
        coronaCasesContext.countriesData.filter(data =>
          data.country.includes("USA")
        )
      );
    }
  };

  return (
    <div className="searchothercountry-content">
      <h1>Search the COVID-19 cases in other Countries</h1>
      <input
        className="search"
        type="text"
        name="searchCountries"
        placeholder="Search the Cases in other countries"
        onChange={handleSearchEventChange}
      />
      {userSearchedCountry
        ? userSearchedCountry.map((data, i) => {
            return (
              <div key={i}>
                <img src={data.countryInfo.flag} alt="Country Flag" />
                <p>CountryName : {data.country}</p>
                <p>Cases: {data.cases}</p>
                <p>Today's Cases: {data.todayCases}</p>
                <p>Death: {data.death}</p>
                <p>Today's Death: {data.todayDeaths}</p>
                <p>Recovered: {data.recovered}</p>
                <p>Active: {data.active}</p>
                <p>Critical: {data.critical}</p>
                <p>Cases per 1 Million: {data.casesPerOneMillion}</p>
                <p>Deaths per 1 Million: {data.deathsPerOneMillion}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SearchOtherCountries;
