import React, { useState, useMemo } from "react";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Sidebar from "./Components/Sidebar.js";
import { Route } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import SecureRoutes from "./Components/SecureRoutes";
import SignUp from "./Pages/SignUp.js";
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
            <SecureRoutes />
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
            <Route
              exact
              path="/signup"
              render={({ match }) => <SignUp match={match} />}
            />
          </>
        </main>
      </div>
    </UserContext.Provider>
  );
}