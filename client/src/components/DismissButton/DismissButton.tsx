import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import classes from "./DismissButton.module.scss";

interface Props {
  icon: React.ReactNode;
  clickHandler: () => void;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
}

const DismissButton: React.FC<Props> = ({
  icon,
  clickHandler,
  pt,
  pb,
  pl,
  pr,
}) => {
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
};

DismissButton.propTypes = {
  icon: PropTypes.node,
  clickHandler: PropTypes.func,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
};

export default DismissButton;
