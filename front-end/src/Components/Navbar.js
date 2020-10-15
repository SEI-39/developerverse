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
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButton uClear";
    } else {
      e.target.className = "uButton uClear uHover";
    }
  }

  return (
    <div className="uPurple navbar" style={{}}>
      <div className="titleFlex">
        <Link to="/">
          <h1 className="uYellowText siteTitle uClear">
            &lt;Developer-Verse&#92;&gt;
          </h1>
        </Link>
      </div>
      <div className="buttonsGrid">
        <Link to="/" className="buttonFlex">
          <h2
            className="uButton uClear"
            onMouseOver={buttonHover}
            onMouseLeave={buttonHover}
          >
            ABOUT
          </h2>
        </Link>
        {user ? (
          <>
            <Link to={`/myprofile/${user.id}`} className="buttonFlex">
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                ACCOUNT
              </h2>
            </Link>
            <button onClick={logout}>
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                LOGOUT
              </h2>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="buttonFlex">
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                LOGIN
              </h2>
            </Link>
            <Link to="/signup" className="buttonFlex">
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                SIGNUP
              </h2>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
