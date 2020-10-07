import React from "react";
import Projects from "./Projects";

function Profile() {
  //the projects will be passed props of what users profile we are on
  return (
    <div>
      <h1>Profile Page</h1>
      <Projects />
    </div>
  );
}

export default Profile;
