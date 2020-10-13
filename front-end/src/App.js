import React, { useState, useMemo } from "react";
import Account from "./Pages/Account.js";
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
              {user ? (
                <Route
                  exact
                  path="/account/:id"
                  render={({ match }) => <Account match={match} />}
                />
              ) : (
                <Route
                  exact
                  path="/account/:id"
                  render={({ match }) => <Login match={match} />}
                />
              )}

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
