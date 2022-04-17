import React from "react";
import { Box, Typography } from "@mui/material";

import classes from "./Card.module.scss";

export default function Card({ img, title, stats }) {
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}></Box>
      <Box className={classes.textContainer}>
        <Typography variant="p" className={classes.title} marginY={5}>
          Spacious Here
        </Typography>
        <Typography variant="p" className={classes.stats} marginY={5}>
          Spacious line is Here
        </Typography>
      </Box>
    </Box>
  );
}
