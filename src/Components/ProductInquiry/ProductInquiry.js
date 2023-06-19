import React from "react";
import Button from "../CustomButton/CustomButton";
import ScrollAnimation from "react-animate-on-scroll";
import "./ProductInquiry.css";

const ProductInquiry = () => {
  return (
    <div className="product-inquiry-section-container">
      <ScrollAnimation animateIn="fadeIn" duration={0.6} animateOnce>
        <div className="product-inquiry-section">
          <h1>For Wellness Companies</h1>
          <p>Apply to sell your product on Bonny.</p>
          <Button
            id="contact-button"
            label={"GET IN TOUCH"}
            backgroundColor={"#185951"}
            backgroundHover={"#f6d06d"}
            color={"white"}
          />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ProductInquiry;
