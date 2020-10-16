import React from "react";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay({ project }) {
  return (
    <div className="uLineBox uGray project__container">
      <div className="project__top">
        <a href={project.project_url}>
          <h2 className="uYellowText">&lt;{project.name}&#47;&gt;</h2>
        </a>
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
