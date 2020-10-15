import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./Navbar.css";
import "./../Universal.css";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const logout = async () => {
    setUser(null);
    history.push("/");
  };

  function buttonHover(e) {
    e.target.className = "uButton uClear uHover";
  }

  return (
    <div className="uPurple navFlex" style={{}}>
      <Link to="/">
        <h1 className="uYellowText siteTitle uClear">
          &lt;Developer-Verse&#92;&gt;
        </h1>
      </Link>
      <Link to="/">
        <h2 className="uButton uClear" onMouseOver={buttonHover}>
          ABOUT
        </h2>
      </Link>
      {user ? (
        <>
          <Link to={`/myprofile/${user.id}`}>
            <h2 className="uButton uClear" onMouseOver={buttonHover}>
              ACCOUNT
            </h2>
          </Link>
          <button onClick={logout}>
            <h2 className="uButton uClear" onMouseOver={buttonHover}>
              LOGOUT
            </h2>
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <h2 className="uButton uClear" onMouseOver={buttonHover}>
              LOGIN
            </h2>
          </Link>
          <Link to="/signup">
            <h2 className="uButton uClear" onMouseOver={buttonHover}>
              SIGNUP
            </h2>
          </Link>
        </>
      )}
    </div>
  );
}
export default Navbar;
