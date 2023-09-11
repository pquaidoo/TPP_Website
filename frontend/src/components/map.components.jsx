import React from "react";
import imageUrl from "../assets/UWmap.png";

const PictureWithTextbox = ({
  MeetDate = "Map of UWT",
  MeetTime = "12pm - 2pm",
  MeetRoom = "JOY 215",
}) => {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      maxWidth: "75%",
      height: "auto",
    },
    textbox: {
      marginTop: "10px",
      backgroundColor: "#4B2E83",
      color: "#D6D0BE",
      borderRadius: "5px",
      padding: "10px",
      maxWidth: "80%",
      textAlign: "center",
    },
  };

  return (
    <div style={style.container}>
      <img src={imageUrl} alt="" style={style.image} />
      <div style={style.textbox}>
        <div>{MeetDate}</div>
        <div>{MeetTime}</div>
        <div>{MeetRoom}</div>
      </div>
    </div>
  );
};

export default PictureWithTextbox;
