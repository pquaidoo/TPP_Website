import React from "react";

let pastList = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h1>{project.project_name}</h1>
          <h2>Contributors: {project.project_Contributors.join(" ")}</h2>
          <h3>
            link:{" "}
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.project_url}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default pastList;
