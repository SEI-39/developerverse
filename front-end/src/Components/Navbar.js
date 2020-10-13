import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    setUser(null);
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4>home</h4>
      </Link>
      {user ? (
        <>
          <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
            <h4>profile</h4>
          </Link>
          <button onClick={logout}>
            <h4>Logout</h4>
          </button>
        </>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h4>Login</h4>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
