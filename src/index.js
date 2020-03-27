import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CoronaCasesProvider from "./context/CoronaCasesContext";
ReactDOM.render(
  <React.StrictMode>
    <CoronaCasesProvider>
      <App />
    </CoronaCasesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
