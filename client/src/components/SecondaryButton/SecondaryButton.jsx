import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import classes from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  text,
  bgColor,
  clor,
  type,
  clickHandler,
  px,
  py,
}) {
  return (
    // <Typography
    //   component="span"
    //   paddingX={px}
    //   paddingY={py}
    //   color={clor}
    //   borderRadius="8px"
    //   onClick={clickHandler}
    //   backgroundColor={bgColor}
    //   className={classes.secondaryButton}
    // >
    //   {text}
    // </Typography>
    <button
      type="submit"
      // color={clor}
      style={{
        backgroundColor: bgColor,
        color: clor,
        borderRadius: "8px",
        paddingTop: py,
        paddingBottom: py,
        paddingLeft: px,
        paddingRight: px,
        border: "none",
      }}
      className={classes.secondaryButton}
    >
      {text}{" "}
    </button>
  );
}
