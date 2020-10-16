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
      e.target.className = "uButton uClear uLightGrayText navButton";
    } else {
      e.target.className = "uButton uClear uLightGrayText uHover navButton";
    }
  }

  return (
    <div
      className="uPurple navbar"
      style={{ borderBottom: "1px solid #756975" }}
    >
      <div className="titleFlex">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1 className="uYellowText siteTitle uClear">
            &lt;Developer-Verse&#47;&gt;
          </h1>
        </Link>
      </div>
      <div className="buttonsGrid">
        <Link to="/" className="buttonFlex" style={{ textDecoration: "none" }}>
          <h2
            className="uButton uClear uLightGrayText navButton"
            onMouseOver={buttonHover}
            onMouseLeave={buttonHover}
          >
            &lt;About&#47;&gt;
          </h2>
        </Link>
        <Link
          to="/explore"
          className="buttonFlex"
          style={{ textDecoration: "none" }}
        >
          <h2
            className="uButton uClear uLightGrayText navButton"
            onMouseOver={buttonHover}
            onMouseLeave={buttonHover}
          >
            &lt;Explore&#47;&gt;
          </h2>
        </Link>
        {user ? (
          <>
            <Link
              to={`/myprofile/${user.id}`}
              className="buttonFlex"
              style={{ textDecoration: "none" }}
            >
              <h2
                className="uButton uClear uLightGrayText navButton"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;Account&#47;&gt;
              </h2>
            </Link>
            <div onClick={logout} className="buttonFlex">
              <h2
                className="uButton uClear uLightGrayText navButton"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;Log_out&#47;&gt;
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
                className="uButton uClear uLightGrayText navButton"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;Log_in&#47;&gt;
              </h2>
            </Link>
            <Link
              to="/signup"
              className="buttonFlex"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2
                className="uButton uClear uLightGrayText navButton"
                onMouseOver={buttonHover}
                onMouseLeave={buttonHover}
              >
                &lt;Sign_up&#47;&gt;
              </h2>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
