import React, { useState, useMemo } from "react";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Sidebar from "./Components/Sidebar.js";
import { HashRouter, Route } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import Login from "./Pages/Login";

export default function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <HashRouter basename="/">
      <UserContext.Provider value={providerValue}>
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
              <Route
                exact
                path="/login"
                render={({ match }) => <Login match={match} />}
              />
            </>
          </main>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}
