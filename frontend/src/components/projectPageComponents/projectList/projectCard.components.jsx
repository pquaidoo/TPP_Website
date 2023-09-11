// import React from "react";
// import "./project-list.styles.css"; // Don't forget to create this CSS file for styling

// const ProjectCard = ({ project }) => {
//   const { project_name, project_Contributors, project_url } = project;

//   return (
//     <a
//       href={project_url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="project-card card-link" // Add both classes
//     >
//       <div>
//         <h1>{project_name}</h1>
//         <h2>Contributors: {project_Contributors.join(" ")}</h2>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;

import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";
import { Link } from "react-router-dom"; // If you're using react-router-dom for navigation
import "./project-list.styles.css"; // Don't forget to create this CSS file for styling

const ProjectCard = ({ project }) => {
  const { project_name, project_Contributors, project_url } = project;

  return (
    <Link
      to={project_url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <Card
        color="neutral"
        orientation="vertical"
        size="lg"
        variant="soft"
        sx={{ width: 250 }}
      >
        <CardContent>
          <Typography level="title-lg">{project_name}</Typography>
          <Typography level="body-sm">
            Contributors: {project_Contributors.join(" ")}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
