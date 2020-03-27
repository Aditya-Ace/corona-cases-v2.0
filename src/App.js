import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BackgroundVideo from "./components/BackgroundVideo";
import VideoContent from "./components/VideoContent";
import GlobalReport from "./components/GlobalReport";
import Precaustions from "./components/Precautions";
import UserCountryCases from "./components/UserCountryCases";
import SearchOtherCountries from "./components/SearchOtherCountries";

function App() {
  return (
    <header className="v-header container">
      <Router>
        <Switch>
          <Route exact path="/">
            <BackgroundVideo />
            <VideoContent />
          </Route>
          <Route exact path="/globalreport">
            <BackgroundVideo />
            <GlobalReport />
          </Route>
          <Route exact path="/precautions">
            <BackgroundVideo />
            <Precaustions />
          </Route>
          <Route exact path="/userCountryCases">
            <BackgroundVideo />
            <UserCountryCases />
          </Route>
          <Route exact path="/searchothercountries">
            <BackgroundVideo />
            <SearchOtherCountries />
          </Route>
        </Switch>
      </Router>
    </header>
  );
}

export default App;
