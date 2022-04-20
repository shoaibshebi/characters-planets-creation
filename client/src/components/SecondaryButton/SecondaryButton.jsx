import React from "react";

import classes from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  px,
  py,
  text,
  clor,
  bgColor,
  clickHandler,
}) {
  return (
    <button
      type="submit"
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
      onClick={clickHandler}
      className={classes.secondaryButton}
    >
      {text}
    </button>
  );
}
