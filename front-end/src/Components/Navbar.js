import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../Styles/Navbar.css";

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
    <div className="uPurple navbar">
      <div className="titleFlex">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1 className="uYellowText siteTitle uClear">
            &lt;Developer-Verse&#47;&gt;
          </h1>
        </Link>
      </div>
      <div className="buttonsGrid">
        <Link
          to="/"
          className="buttonFlex"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2
            className="uButton uClear"
            onMouseOver={buttonHover}
            onMouseLeave={buttonHover}
          >
            &lt;ABOUT&#47;&gt;
          </h2>
        </Link>
        <Link
          to="/explore"
          className="buttonFlex"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2
            className="uButton uClear"
            onMouseOver={buttonHover}
            onMouseLeave={buttonHover}
          >
            &lt;EXPLORE&#47;&gt;
          </h2>
        </Link>
        {user ? (
          <>
            <Link
              to={`/myprofile/${user.id}`}
              className="buttonFlex"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;ACCOUNT&#47;&gt;
              </h2>
            </Link>
            <div
              onClick={logout}
              className="buttonFlex"
              style={{ color: "white" }}
            >
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;LOG_OUT&#47;&gt;
              </h2>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="buttonFlex"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;LOG_IN&#47;&gt;
              </h2>
            </Link>
            <Link
              to="/signup"
              className="buttonFlex"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2
                className="uButton uClear"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;SIGN_UP&#47;&gt;
              </h2>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
