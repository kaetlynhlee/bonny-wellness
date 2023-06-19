import React from "react";
import Divider from "@mui/material/Divider";
import ConsumerEmailForm from "../ConsumerEmailForm/ConsumerEmailForm";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <img
          id="footer-logo"
          src={require("../Images/BonnyLogo.png")}
          height={5}
          alt="Bonny Logo"
        />
        <p>Find all of the solutions to your unique feminine needs</p>
      </div>
      <div className="rightFooter">
        <ConsumerEmailForm className="consumer-email-submit-footer" />
      </div>

      <div className="bottomFooter">
        <Divider role="presentation">© 2023 Bonny</Divider>
      </div>
    </footer>
  );
};

export default Footer;
