import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BackgroundVideo from "./components/BackgroundVideo";
import VideoContent from "./components/VideoContent";
import GlobalReport from "./components/GlobalReport";

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
        </Switch>
      </Router>
    </header>
  );
}

export default App;
