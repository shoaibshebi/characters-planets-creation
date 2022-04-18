import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { tooltipTrim } from "../../utils/utils";
import classes from "./CharacterTile.module.scss";

export default function CharacterTile({ title, description, img }) {
  return (
    <>
      <Box className={classes.container}>
        <Grid container>
          <Grid item md={3} pt={1} className={classes.imgContainer}>
            <img alt=" " src={img} className={classes.icon} />
          </Grid>
          <Grid item md={8} p={1}>
            <Typography variant="h6" marginY={2} className={classes.title}>
              {tooltipTrim(title, 15)}
            </Typography>
            <Typography variant="p" marginY={2}>
              {tooltipTrim(description, 27)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
