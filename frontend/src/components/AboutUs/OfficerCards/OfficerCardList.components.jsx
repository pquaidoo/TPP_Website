import React, { useState, useEffect } from "react";
import { getMembers } from "../../api/api.components";
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
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #647DEE, #7F53AC)",
        height: "100%", // Adjust the height as needed
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
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
    </div>
  );
};

export default OfficerCardList;
