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
      coronaCasesContext.countriesData
        .filter(data => data.country.includes(userSearchValue))
        .splice(0, 2)
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
    <div className="container">
      <div className="row">
        <div className="col s12 searchCard">
          <div className="searchothercountry-content ">
            <h1 className="search-header">
              Search the COVID-19 cases in other Countries
            </h1>
            <input
              className="search"
              type="text"
              name="searchCountries"
              placeholder="Search the Cases in other countries"
              onChange={handleSearchEventChange}
              style={{ color: "#fff", fontSize: "1.2em", marginTop: 0 }}
            />
            {userSearchedCountry
              ? userSearchedCountry.map((data, i) => {
                  return (
                    <div className="search-data" key={i}>
                      <table className="blue-grey darken-4 centered responsive-table">
                        <thead>
                          <tr style={{ color: "#fff" }}>
                            <th>Country</th>
                            <th>Cases</th>
                            <th>Today's Cases</th>
                            <th>Deaths</th>
                            <th>Today's Death</th>
                            <th>Recovered</th>
                            <th>Active</th>
                            <th>Critical</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={data.countryInfo.flag}
                                alt="Country Flag"
                                className="flag"
                              />
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.cases).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.todayCases).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.deaths).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.todayDeaths).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.recovered).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.active).toLocaleString()}
                              </span>
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#C70039",
                                  fontSize: "1em"
                                }}
                              >
                                {Number(data.critical).toLocaleString()}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOtherCountries;
