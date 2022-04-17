import React from "react";
import { Grid, Typography } from "@mui/material";

import classes from "./NotFound.module.scss";
import planetLoaderIcon from "../../assets/images/planet-loader.svg";

export default function NotFound({ text }) {
  return (
    <Grid container className={classes.container}>
      <Typography variant="h1" className={classes.code}>
        404
      </Typography>
      <img alt="planet icon" src={planetLoaderIcon} />
      <Typography variant="h6" className={classes.title}>
        {text}
      </Typography>
    </Grid>
  );
}
