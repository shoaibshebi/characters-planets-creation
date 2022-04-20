import React from "react";
import PropTypes from "prop-types";

import classes from "./AddButton.module.scss";

function AddButton({ br, clr, icon, bgclr, clickHandler }) {
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

AddButton.propTypes = {
  br: PropTypes.string,
  icon: PropTypes.node,
  clr: PropTypes.string,
  bgclr: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default AddButton;
