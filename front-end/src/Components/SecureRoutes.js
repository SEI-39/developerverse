import React, { useContext } from "react";
import { UserContext } from "../UserContext.js";
import { Route } from "react-router-dom";
import MyProfile from "../Pages/MyProfile.js";
import Login from "../Pages/Login";

function SecureRoutes() {
  const { user } = useContext(UserContext);

  return (
    <div>
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
    </div>
  );
}

export default SecureRoutes;
