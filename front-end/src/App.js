import React, { useState, useMemo } from "react";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import Sidebar from "./Components/Sidebar.js";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp.js";
import NotFound from "./Components/NotFound.js";
import MyProfile from "./Pages/MyProfile";

export default function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          {user ? (
            <Route exact path="/myprofile/:id" component={MyProfile} />
          ) : (
            <Route exact path="/myprofile/:id" component={Login} />
          )}
          <Route component={NotFound} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}
