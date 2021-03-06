import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "../axios";
import ProjectDisplay from "../Components/ProjectDisplay";
import "./../Styles/MyProfile.css";

function MyProfile() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [repoURL, setRepoURL] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [desc, setDesc] = useState("");
  const [projects, setProjects] = useState(null);

  const { user } = useContext(UserContext);

  const header = {
    Authorization: `token ${user.token}`,
  };

  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get(`/users/profile`, {
        headers: header,
      });
      setProjects(res.data);
      return res;
    }
    fetchProjects();
  }, [form]);

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
        headers: header,
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

  function buttonHover(e) {
    if (e.target.className.includes("uHover")) {
      e.target.className = "uButton uGray uWhiteText loginButton loginFlex";
    } else {
      e.target.className = "uButton uGray uHover loginButton loginFlex";
    }
  }

  function buttonClick(e) {
    e.target.className = "uButton uGray uClick loginButton loginFlex";
  }

  return (
    <div className="uLightGrayText">
      <div>
        <div
          className="uLineBox uGray profileHeader"
          style={{ paddingBottom: "20px" }}
        >
          <h2 className="uLightGrayText" style={{}}>
            Your DeveloperVerse account{" "}
          </h2>
          <hr
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              borderColor: "#f2ce18",
            }}
          ></hr>
          <h3 className="uLightGrayText" style={{}}>
            if (isDeveloper === true &amp;&amp; isLoggedIn === true) &#123;{" "}
            <br />
          </h3>{" "}
        </div>
      </div>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>Projects:</h2>
      {projects && (
        <div className="profileProjects">
          {projects.map((project) => (
            <ProjectDisplay project={project} />
          ))}
        </div>
      )}
      <div>
        <h2
          onMouseOver={buttonHover}
          onMouseLeave={buttonHover}
          onMouseDown={buttonClick}
          onClick={() => setForm(true)}
          type="submit"
          className="uButton uGray uLightGrayText loginButton loginFlex"
        >
          Create_New_Project();
        </h2>
      </div>
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
          <div>
            <h2
              onMouseOver={buttonHover}
              onMouseLeave={buttonHover}
              onMouseDown={buttonClick}
              onClick={createProject}
              type="submit"
              className="uButton uGray uLightGrayText loginButton loginFlex"
            >
              Submit_Project();
            </h2>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default MyProfile;
