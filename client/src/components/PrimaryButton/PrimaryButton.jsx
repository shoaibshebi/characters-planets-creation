import React from "react";
import csx from "classnames";
import { Typography } from "@mui/material";

import classes from "./PrimaryButton.module.scss";

export default function PrimaryButton({ text, clicked, onClickHandler }) {
  return (
    <Typography
      component="span"
      className={csx(classes.pagesTitle, clicked ? classes.clicked : null)}
      onClick={() => onClickHandler(text)}
    >
      {text}
    </Typography>
  );
}
