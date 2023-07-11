import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "../CustomButton/CustomButton";

const ConsumerEmailForm = ({ className }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const data = {
      Email: email,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/6463677c-e375-446f-82b7-f75d62dbba25",
        data
      )
      .then((response) => {
        console.log(response);
        setEmail("");
      });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className={className}>
        <TextField
          type="email"
          name="email"
          sx={{ height: "100%" }}
          id="consumer-email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button
          type="submit"
          id="email-button"
          label={"JOIN THE WAITLIST"}
          backgroundColor={"#185951"}
          backgroundHover={"#f6d06d"}
          color={"white"}
        />
      </div>
    </form>
  );
};

export default ConsumerEmailForm;
