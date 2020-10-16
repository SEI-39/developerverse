import React from "react";

function ProjectDisplay({ project }) {
  return (
    <div className="uYellow" style={{ margin: "10px" }}>
      <h1>{project.name}</h1>
      <h2>{project.repo_url}</h2>
      <h2>{project.project_url}</h2>
      <h2>{project.desc}</h2>
    </div>
  );
}

export default ProjectDisplay;
