import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import Button from "../CustomButton/CustomButton";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "For Consumers",
    },
    {
      text: "For Wellness Companies",
    },
    {
      text: "Take the Quiz",
    },
  ];

  return (
    <nav>
      <div className="nav-left-container">
        <div className="nav-logo-container">
          <img src={require("../Images/BonnyLogo.png")} alt="Bonny Logo" />
        </div>
        <div className="navbar-links-container">
          <a href="">FOR CONSUMERS</a>
          <a id="for-wellness-companies" href="">
            FOR WELLNESS COMPANIES
          </a>
        </div>
      </div>
      <div className="quiz-link-container">
        <Button
          id="beta-button"
          label={"TAKE THE QUIZ"}
          backgroundColor={"#185951"}
          backgroundHover={"#f6d06d"}
          color={"white"}
        />
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
