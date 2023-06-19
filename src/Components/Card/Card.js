import React from "react";
import "./Card.css";

const Card = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description &&
        description.map((item, index) => (
          <div className="card-item" key={index}>
            <img
              className="checkmark"
              src={require("../Images/checkmark.png")}
              alt="checkmark"
            />
            <span className="card-description">{item.text}</span>
          </div>
        ))}
    </div>
  );
};

export default Card;
