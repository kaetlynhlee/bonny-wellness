import React from "react";
import ConsumerEmailForm from "../ConsumerEmailForm/ConsumerEmailForm";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-section">
        <h1 className="primary-heading">
          Meet <span className="yellow-underline">Bonny</span>, <br />
          curated feminine wellness solutions that you can trust
          <span className="yellow-underline">&nbsp;</span>
        </h1>
        <ConsumerEmailForm className="consumer-email-submit" />
      </div>
      <div className="home-image-section">
        <img
          className="home-image-leaf"
          src={require("../Images/leaf-shape.svg")}
          alt="leaf illustration"
        />
        <div className="home-image-girl-wrapper">
          <img
            className="home-image-girl"
            src={
              "https://uploads-ssl.webflow.com/6484c2473e0ecc1f1a8d8536/6484c2473e0ecc1f1a8d85b4_home-hero-cbd-x-template.jpg"
            }
            alt="girl smiling in sun"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
