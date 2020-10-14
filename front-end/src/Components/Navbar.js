import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const logout = async () => {
    setUser(null);
    history.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "50vw",
        left: "0",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4>DEVELOPERVERSE</h4>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4>ABOUT</h4>
      </Link>
      {user ? (
        <>
          <Link to={`/myprofile/${user.id}`} style={{ textDecoration: "none" }}>
            <h4>ACCOUNT</h4>
          </Link>
          <button onClick={logout}>
            <h4>LOGOUT</h4>
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h4>LOGIN</h4>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <h4>SIGNUP</h4>
          </Link>
        </>
      )}
    </div>
  );
}
export default Navbar;