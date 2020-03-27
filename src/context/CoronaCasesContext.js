import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CoronaCasesContext = createContext({
  globalReport: {},
  countriesData: []
});

const CoronaCasesProvider = props => {
  const [globalReport, setGlobalReport] = useState({});
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const coronaReportHandler = () => {
      let urlForGlobalReport = process.env.REACT_APP_WORLD_REPORT_API;

      axios.get(`${urlForGlobalReport}all`).then(res => {
        if (res.status === 200) {
          setGlobalReport(res.data);
        }
      });

      axios.get(`${urlForGlobalReport}countries`).then(res => {
        if (res.status === 200) {
          setCountriesData(res.data);
        }
      });
    };
    coronaReportHandler();
  }, []);

  return (
    <CoronaCasesContext.Provider value={{ globalReport, countriesData }}>
      {props.children}
    </CoronaCasesContext.Provider>
  );
};

export default CoronaCasesProvider;
