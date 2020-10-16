import React from "react";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay({ project }) {
  return (
    <div className="uLineBox uGray project__container">
      <div className="project__top">
        <h1 className="uYellowText">{project.name}</h1>
        <h2>Description: {project.desc}</h2>
      </div>
      <div className="project__bottom">
        <div>
          <h2>Repo URL: {project.repo_url}</h2>
          <h2>Project URL: {project.project_url}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
