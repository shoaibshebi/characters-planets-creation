import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

import classes from "./NotFound.module.scss";
import planetLoaderIcon from "../../assets/images/planet-loader.svg";

interface Props {
  text: string;
  code: number | string;
}

const NotFound: React.FC<Props> = ({ text, code }) => {
  return (
    <Grid container className={classes.container}>
      <Typography variant="h1" className={classes.code}>
        {code}
      </Typography>
      <img alt="planet icon" src={planetLoaderIcon} />
      <Typography variant="h6" className={classes.title}>
        {text}
      </Typography>
    </Grid>
  );
};

NotFound.propTypes = {
  text: PropTypes.string,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NotFound;
