import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OfficerCard({ officer }) {
  return (
    <Card
      sx={{ maxWidth: 345, border: "1px solid #ddd", borderRadius: "10px" }}
    >
      <CardMedia
        component="img"
        alt="Officer Picture"
        height="200"
        image={officer.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {officer.firstName} {officer.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {officer.roles.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Socials</Button>
        <Button size="small">Projects</Button>
      </CardActions>
    </Card>
  );
}
