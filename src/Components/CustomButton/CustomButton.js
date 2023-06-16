import React from 'react'
import {Button} from "@mui/material"
import './CustomButton.css';


const CustomButton = ({id, label, color, backgroundColor, backgroundHover, colorHover}) => {
  const btnSX = {
    "padding": '1rem',
    "transition": '0.25s',
    "borderRadius": 0,
    "color": color,
    "backgroundColor": backgroundColor,
    "boxShadow": 'none',
    "&:hover,&:focus": {
      color: colorHover || color,
      backgroundColor: backgroundHover || backgroundColor,
      'transform': 'translateY(-0.25em)',
      "boxShadow": 'none',
    },
  };

  return (
    <Button type='submit' variant="contained" id={id} sx={btnSX}>
                {label}
    </Button>  
  )
}

export default CustomButton