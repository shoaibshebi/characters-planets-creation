import React from "react";
import csx from "classnames";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import classes from "./PrimaryButton.module.scss";

interface Props {
  text: string;
  clicked: boolean;
  onClickHandler: (text: string) => void;
}

const PrimaryButton: React.FC<Props> = ({ text, clicked, onClickHandler }) => {
  return (
    <Typography
      component="span"
      className={csx(classes.pagesTitle, clicked ? classes.clicked : null)}
      onClick={() => onClickHandler(text)}
    >
      {text}
    </Typography>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  clicked: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default PrimaryButton;
