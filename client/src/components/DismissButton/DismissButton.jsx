import React from "react";
import { Typography } from "@mui/material";

import classes from "./DismissButton.module.scss";

export default function DismissButton({ icon, clickHandler }) {
  return (
    <Typography
      component="span"
      onClick={clickHandler}
      className={classes.dismissButton}
    >
      {icon}
    </Typography>
  );
}
