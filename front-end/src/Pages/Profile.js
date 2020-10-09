import React from "react";
import ProjectList from "../Components/ProjectList";

function Profile() {
  //the projects will be passed props of what users profile we are on
  return (
    <div>
      <h1>Profile Page</h1>
      <ProjectList />
    </div>
  );
}

export default Profile;
