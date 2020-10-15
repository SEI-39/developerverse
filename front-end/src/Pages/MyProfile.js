import React, { useState, useContext } from "react";
import ProjectList from "../Components/ProjectList";
import { UserContext } from "../UserContext";
import axios from "../axios";

function MyProfile() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [repoURL, setRepoURL] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [desc, setDesc] = useState("");

  const { user } = useContext(UserContext);

  const createProject = async () => {
    let headers = {
      Authorization: `token ${user.token}`,
    };
    let project = {
      user: user.user_id,
      name: name,
      repo_url: repoURL,
      project_url: projectURL,
      desc: desc,
    };
    await axios
      .post(`/projects/create`, project, {
        headers: headers,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
        alert(
          "Please make sure that the project and/or repo url is in standard url format"
        );
      });

    setForm(false);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>My Account</h1>
      <pre>USER: {JSON.stringify(user)}</pre>
      <ProjectList />
      <button onClick={() => setForm(true)}>create project</button>
      {form && (
        <div>
          <h1>here is a form</h1>
          <input
            placeholder="Project Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Repo url"
            onChange={(e) => setRepoURL(e.target.value)}
          />
          <input
            placeholder="Project url"
            onChange={(e) => setProjectURL(e.target.value)}
          />
          <input
            placeholder="Project description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={() => createProject()}>create</button>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
