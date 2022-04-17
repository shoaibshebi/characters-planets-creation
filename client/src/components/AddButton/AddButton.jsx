import React from "react";
import { Typography } from "@mui/material";

import classes from "./AddButton.module.scss";

export default function AddButton({
  br,
  clr,
  icon,
  padd,
  bgclr,
  clickHandler,
}) {
  return (
    <Typography
      color={clr}
      padding={padd}
      component="p"
      borderRadius={br}
      bgcolor={bgclr}
      onClick={clickHandler}
    >
      {icon}
    </Typography>
  );
}
