import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import BackgroundVideo from "./components/BackgroundVideo";
import VideoContent from "./components/VideoContent";
import GlobalReport from "./components/GlobalReport";
import Precautions from "./components/Precautions";
import UserCountryCases from "./components/UserCountryCases";
import SearchOtherCountries from "./components/SearchOtherCountries";

function App() {
  return (
    <Router>
      <BackgroundVideo />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <VideoContent />
        </Route>
        <Route exact path="/globalreport">
          <GlobalReport />
        </Route>
        <Route exact path="/precautions">
          <Precautions />
        </Route>
        <Route exact path="/userCountryCases">
          <UserCountryCases />
        </Route>
        <Route exact path="/searchothercountries">
          <SearchOtherCountries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
