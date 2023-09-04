import React from "react";
import { Slide } from "@mui/material";
import styles from "./TopSection.module.css";

const ImageCircle = ({ imageUrl, altText }) => (
  <div className={styles.imageCircle}>
    <img src={imageUrl} alt={altText} className={styles.image} />
  </div>
);

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <p>{children}</p>
    </Slide>
  </div>
);

const CircleWithImage = ({ imageUrl, altText }) => {
  return (
    <div className={styles.container}>
      <ImageCircle imageUrl={imageUrl} altText={altText} />
      <div className={styles.text}>
        <Section title="About The Programming Project">
          The Programming Project was founded in 2022 by Jayana Estacio. Our
          mission is to create a safe place for new and inexperienced computer
          science students.
        </Section>
        <Section title="Why We Exist">
          Many new computer science students struggle with creating outside the
          classroom. We want to be the extra help that these students need.
        </Section>
      </div>
    </div>
  );
};

export default CircleWithImage;
