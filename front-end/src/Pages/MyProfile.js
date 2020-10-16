import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "../axios";
import ProjectDisplay from "../Components/ProjectDisplay";

function MyProfile() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [repoURL, setRepoURL] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [desc, setDesc] = useState("");
  const [projects, setProjects] = useState(null);

  const { user } = useContext(UserContext);

  const headers = {
    Authorization: `token ${user.token}`,
  };

  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get(`/users/profile`, {
        headers: headers,
      });
      setProjects(res.data);
      return res;
    }
    fetchProjects();
  }, [headers]);

  const createProject = async () => {
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
      {projects && (
        <div className="projects__container">
          {projects.map((project) => (
            <ProjectDisplay project={project} />
          ))}
        </div>
      )}
      <button onClick={() => setForm(true)}>create a new project</button>
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
