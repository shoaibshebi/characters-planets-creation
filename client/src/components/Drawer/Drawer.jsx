import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./Drawer.module.scss";
import CharacterTile from "../CharacterTile/CharacterTile";

export default function Drawer() {
  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.title} marginY={2}>
        Spacious
      </Typography>
      <Typography variant="p" className={classes.title} marginY={2}>
        Spacious
      </Typography>
      <Box marginY={2}>
        <Typography variant="p" className={classes.title}>
          Population
        </Typography>
        <Typography variant="p" className={classes.title}>
          234
        </Typography>
      </Box>
      <Grid container justifyContent="space-between">
        <Typography variant="p" className={classes.title} marginY={2}>
          Characters
        </Typography>
        <Typography variant="p" className={classes.title} marginY={2}>
          Add
        </Typography>
      </Grid>
      <Box className={classes.characters}>
        {Array(8)
          .fill()
          .map((_, i) => (
            <CharacterTile />
          ))}
      </Box>
    </Box>
  );
}
