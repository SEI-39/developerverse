import React, { useState, useEffect } from "react";
import axios from "../axios";
import ProjectDisplay from "../Components/ProjectDisplay";
import "../Styles/Explore.css";

function Explore() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get(`/projects/`);
      setProjects(res.data);
      return res;
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>50 most recent projects</h1>
      {projects && (
        <div className="projects__container">
          {projects.map((project) => (
            <ProjectDisplay project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;
