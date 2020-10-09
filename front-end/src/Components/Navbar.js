import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <h1>navbar</h1>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>home</h4>
        </Link>
        <Link to="/profile/1" style={{ textDecoration: "none" }}>
          <h4>profile</h4>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
