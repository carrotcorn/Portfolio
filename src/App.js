import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home.js";
import Header from "./components/Header.js";
import HeaderLinks from "./components/HeaderLinks.js";

const dashboardRoutes = [];

export default function App(props) {
  return (
    <div>
      <Router>
        <Header
          color='primary'
          routes={dashboardRoutes}
          brand='Eric Bourne'
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
        <Home />
      </Router>
    </div>
  );
}
