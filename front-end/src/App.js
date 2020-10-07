import React from "react";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Sidebar from "./Components/Sidebar.js";
import { HashRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <HashRouter basename="/">
      <div>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <main>
          <>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/profile/:id"
              render={({ match }) => <Profile match={match} />}
            />
          </>
        </main>
      </div>
    </HashRouter>
  );
}
