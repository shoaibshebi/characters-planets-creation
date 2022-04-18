import React from "react";
import { Typography } from "@mui/material";

import classes from "./DismissButton.module.scss";

export default function DismissButton({ icon, clickHandler, pt, pb, pl, pr }) {
  return (
    <Typography
      component="span"
      onClick={clickHandler}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      className={classes.dismissButton}
    >
      {icon}
    </Typography>
  );
}
