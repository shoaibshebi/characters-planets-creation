import React from "react";
import { Box, Typography } from "@mui/material";

import classes from "./Card.module.scss";
import { tooltipTrim } from "../../utils/utils";

export default function Card({
  id,
  title,
  code,
  image,
  newNodeId,
  population,
  clickHandler,
}) {
  return (
    <Box className={classes.container} onClick={() => clickHandler(id ?? code)}>
      <Box className={classes.imgContainer}>
        <img
          alt=" "
          src={image}
          height="100%"
          width="100%"
          className={classes.img}
        />
        {newNodeId && (
          <Box className={classes.newCreated}>
            <span>It's upto the imagination</span>
          </Box>
        )}
      </Box>
      <Box className={classes.textContainer}>
        <Typography variant="h6" className={classes.title} margin={0}>
          {tooltipTrim(title, 15)}
        </Typography>
        {population !== "no data" && (
          <Typography variant="h6" className={classes.stats}>
            Pop: {population ?? "--"}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
