import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);
