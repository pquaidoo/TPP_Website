import React from "react";
import ProjectCard from "./projectCard.components"; // Update the import path to match your component's location
import "./project-list.styles.css";
import "../../pages/projects/projects.css";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
