import React from "react";

import classes from "./AddButton.module.scss";

export default function AddButton({ br, clr, icon, bgclr, clickHandler }) {
  return (
    <p
      style={{ color: clr, borderRadius: br, backgroundColor: bgclr }}
      className={classes.addButton}
      onClick={clickHandler}
    >
      {icon}
    </p>
  );
}
