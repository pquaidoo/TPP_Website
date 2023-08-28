import React, { useState, useEffect } from "react";
import { getProjects } from "../api/api.components";

let PastProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  console.log(projects);
  console.log("test");
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

export default PastProjects;
