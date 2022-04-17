import React from "react";
import { Typography } from "@mui/material";

import classes from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  text,
  bgColor,
  clor,
  clickHandler,
  px,
  py,
}) {
  return (
    <Typography
      component="span"
      paddingX={px}
      paddingY={py}
      backgroundColor={bgColor}
      color={clor}
      borderRadius="8px"
      className={classes.secondaryButton}
      onClick={clickHandler}
    >
      {text}
    </Typography>
  );
}
