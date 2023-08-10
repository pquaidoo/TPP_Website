import React, { useState, useEffect } from "react";
import { getMembers } from "../../../api/api.components";
import OfficerCard from "./OfficerCard.components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let OfficerCardList = () => {
  const [officer, setOfficer] = useState([]);

  useEffect(() => {
    getMembers().then((response) => {
      setOfficer(response.data);
    });
  }, []);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000} //every 5seconds it'll switch
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      {officer.map((officer, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <OfficerCard officer={officer} />
        </div>
      ))}
    </Carousel>
  );
};

export default OfficerCardList;
