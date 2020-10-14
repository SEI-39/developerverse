import React, { useContext } from "react";
import ProjectList from "../Components/ProjectList";
import { UserContext } from "../UserContext";

function MyProfile() {
  const { user } = useContext(UserContext);

  //the projects will be passed props of what users profile we are on

  return (
    <div>
      <h1>My Account</h1>
      <pre>USER: {JSON.stringify(user)}</pre>
      <ProjectList />
    </div>
  );
}

export default MyProfile;
