import React from "react";
import Card from "../Card/Card";
import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";

const About = () => {
  const offeringsContent = [
    {
      text:
        "OBGYN approved products through Bonny's  network of board-certified OBGYNs.",
    },
    {
      text: "Emphasis on natural ingredients.",
    },
    {
      text: "24/7 access to a personal concierge.",
    },
  ];
  const obgynStatement = (
    <p>
      <span className="yellow-underline">OB/GYN</span> reviewed, approved, and
      rated solutions.
    </p>
  );
  return (
    <div className="about-section-container">
      <div className="about-image-section">
        <ScrollAnimation
          animateIn="slideInRight"
          style={{ width: "100%", height: "100%" }}
          duration={0.6}
          animateOnce
        >
          <img
            id="about-girl-smile"
            src={require("../Images/smiling-girl.jpg")}
            alt="girl smiling wearing sunglasses"
          />
        </ScrollAnimation>
      </div>
      <div className="about-text-section">
        <ScrollAnimation
          className="scroll-animation-lines"
          animateIn="fadeIn"
          duration={0.6}
          delay={200}
          animateOnce
        >
          <img
            className="yellow-lines"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigyBkBT79MvI2wZlJAfB8wjNWDRXvzb7pV2jj7Nq0Tv643LqJ"
            alt="yellow-dots"
          />
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInRight"
          style={{ width: "100%", height: "100%" }}
          duration={0.6}
          animateOnce
        >
          <Card title={obgynStatement} description={offeringsContent}></Card>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
