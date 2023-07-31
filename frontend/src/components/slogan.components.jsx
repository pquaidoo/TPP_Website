import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";

const icon = (
  <Paper
    sx={{
      m: 1,
      p: 2,
      backgroundColor: "#4B2E83",
      borderRadius: "8px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      width: "100%", // Stretch the Paper component to the width of the tab
    }}
    elevation={0}
  >
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        color: "#D6D0BE",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <Zoom in={true}>
        <span style={{ fontSize: "1.5rem" }}>Find Your Path</span>
      </Zoom>
      <Zoom in={true} style={{ transitionDelay: "500ms" }}>
        <span style={{ fontSize: "1.5rem" }}>Shape Your Future</span>
      </Zoom>
      <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
        <span style={{ fontSize: "1.5rem" }}>Join The Programming Project</span>
      </Zoom>
    </Box>
  </Paper>
);

export default function SimpleZoom() {
  return (
    <Box sx={{ height: 180 }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Zoom in={true}>{icon}</Zoom>
      </Box>
    </Box>
  );
}
