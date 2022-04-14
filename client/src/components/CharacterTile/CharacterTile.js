import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./CharacterTile.module.scss";

export default function CharacterTile({ title, img }) {
  return (
    <>
      <Box className={classes.container}>
        <Grid container>
          <Grid item md={3} pt={1}>
            <img alt=" " src={img} className={classes.icon} />
          </Grid>
          <Grid item md={8} pl={0.5}>
            <Typography variant="p" marginY={2}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
