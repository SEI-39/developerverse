import React from "react";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay({ project }) {
  return (
    <div className="uLineBox uGray project__container">
      <div className="project__top">
        <h2 className="uYellowText">{project.name}</h2>
        <h3>Description: {project.desc}</h3>
      </div>
      <div className="project__bottom">
        <div>
          <p>Repo URL: {project.repo_url}</p>
          <p>Project URL: {project.project_url}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
