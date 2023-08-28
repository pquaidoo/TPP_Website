import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const squareCardStyles = {
  width: "500px", // Set the width of the square card
  height: "500px", // Set the height of the square card
  display: "flex", // Use flex display to center content
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content vertically
  marginBottom: "20px", // Add margin at the bottom for spacing
  transition: "background-color 0.3s", // Smooth transition for color change
  cursor: "pointer", // Show pointer cursor on hover

  ":hover": {
    backgroundColor: "#f0f0f0", // Change background color on hover
  },
};

function ProjectCard({ children }) {
  return (
    <Card sx={squareCardStyles}>
      <Box p={2}>{children}</Box>
    </Card>
  );
}

export default function ProjectPage() {
  const projectCardContainerStyles = {
    display: "flex", // Use flex display to arrange cards side by side
    justifyContent: "space-around", // Space evenly between cards
  };

  return (
    <div style={projectCardContainerStyles}>
      <ProjectCard>Current Project</ProjectCard>
      <ProjectCard>Past Projects</ProjectCard>
    </div>
  );
}
