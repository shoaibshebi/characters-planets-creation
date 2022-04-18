import React from "react";
import { Grid, Typography, Box } from "@mui/material";

import classes from "./Loader.module.scss";
import planetLoaderIcon from "../../assets/images/planet-loader.svg";

export default function Loader({ text }) {
  return (
    <Grid container className={classes.container}>
      <Box className={classes.card}>
        <img alt="planet icon" src={planetLoaderIcon} />
      </Box>
      <Typography variant="h6" className={classes.title} marginY={5}>
        {text}
      </Typography>
    </Grid>
  );
}
