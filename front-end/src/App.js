import React, { useState, useMemo } from "react";
import MyProfile from "./Pages/MyProfile.js";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Sidebar from "./Components/Sidebar.js";
import { Route } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

export default function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
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
                path="/myprofile/:id"
                render={({ match }) => <MyProfile match={match} />}
              />
            ) : (
              <Route
                exact
                path="/myprofile/:id"
                render={({ match }) => <Login match={match} />}
              />
            )}
            <Route
              exact
              path="/login"
              render={({ match }) => <Login match={match} />}
            />
            <Route
              exact
              path="/profile/:id"
              render={({ match }) => <Profile match={match} />}
            />
          </>
        </main>
      </div>
    </UserContext.Provider>
  );
}
