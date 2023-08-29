import React from "react";
import "./project-list.styles.css"; // Don't forget to create this CSS file for styling

const ProjectCard = ({ project }) => {
  const { project_name, project_Contributors, project_url } = project;

  return (
    <a
      href={project_url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card card-link" // Add both classes
    >
      <div>
        <h1>{project_name}</h1>
        <h2>Contributors: {project_Contributors.join(" ")}</h2>
      </div>
    </a>
  );
};

export default ProjectCard;
