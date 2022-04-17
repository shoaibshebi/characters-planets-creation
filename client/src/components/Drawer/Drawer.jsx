import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./Drawer.module.scss";
import CharacterTile from "../CharacterTile/CharacterTile";

export default function Drawer() {
  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.title} marginY={2}>
        Spacious
      </Typography>
      <Typography variant="p" className={classes.desc} marginY={2}>
        Planet Alpha is the place to be if you like everything related to
        planets. I know it’s a bit meta, but come see by yourself.
      </Typography>
      <Box marginY={2}>
        <Typography variant="h6" className={classes.statsHead}>
          Population
        </Typography>
        <Typography variant="p" className={classes.stats} fontWeight="bold">
          234
        </Typography>
      </Box>
      <Grid container justifyContent="space-between">
        <Typography variant="h6" className={classes.charsText} marginY={2}>
          Characters
        </Typography>
        <Typography variant="p" className={classes.addButton} marginY={2}>
          Add
        </Typography>
      </Grid>
      <Box className={classes.characters}>
        {Array(8)
          .fill()
          .map((_, i) => (
            <CharacterTile key={i} />
          ))}
      </Box>
    </Box>
  );
}
