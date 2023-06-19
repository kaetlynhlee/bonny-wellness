import React from "react";
import Card from "../Card/Card";
import ScrollAnimation from "react-animate-on-scroll";
import "./Standards.css";

const Standards = () => {
  const standardsContent = [
    {
      text: "Natural, organic, hypoallergenic ingredients, whenever possible.",
    },
    {
      text: "Made by the best most ethical brands.",
    },
    {
      text: "FDA-approved solutions and certified products.",
    },
    {
      text: "Real in-depth user reviews.",
    },
    {
      text: "100% Gynecologist recommended and approved.",
    },
    {
      text: "Prohibiting the use of 500+ “never ingredients”.",
    },
  ];
  return (
    <div className="standards-section-container">
      <div id="standards-text-header">
        <ScrollAnimation animateIn="fadeInDown" duration={0.6} animateOnce>
          <h1>
            We're tired of the same solutions with{" "}
            <span className="yellow-underline">no results</span>.
          </h1>
          <p>
            Every solution we sell must reach the highest standard in the
            industry - OURS.
          </p>
        </ScrollAnimation>
      </div>

      <div className="standards-image-section">
        <ScrollAnimation
          animateIn="slideInRight"
          style={{ width: "100%", height: "100%" }}
          duration={0.8}
          animateOnce
        >
          <img
            id="standards-product-image"
            src="https://images.pexels.com/photos/6955177/pexels-photo-6955177.jpeg?cs=srgb&dl=pexels-nora-topicals-6955177.jpg&fm=jpg"
            alt="cbd oil product"
          />
        </ScrollAnimation>
      </div>
      <div className="standards-list">
        <ScrollAnimation
          className="scroll-animation-std-card"
          animateIn="fadeIn"
          duration={0.5}
          delay={100}
          animateOnce
        >
          <Card
            customWidth={"90%"}
            description={standardsContent}
            customHeight={"40vh"}
          ></Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Standards;
