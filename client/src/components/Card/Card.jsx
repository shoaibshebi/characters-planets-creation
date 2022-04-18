import React from "react";
import { Box, Typography } from "@mui/material";

import classes from "./Card.module.scss";

export default function Card({
  id,
  title,
  code,
  image,
  population,
  clickHandler,
}) {
  return (
    <Box className={classes.container} onClick={() => clickHandler(id ?? code)}>
      <Box
        className={classes.imgContainer}
        // style={{ backgroundImage: `url(${image}) cover no-repeat center` }}
      >
        <img
          alt=" "
          src={image}
          height="100%"
          width="100%"
          className={classes.img}
        />
      </Box>
      <Box className={classes.textContainer}>
        <Typography variant="h6" className={classes.title} margin={0}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.stats}>
          Pop: {population ?? "--"}
        </Typography>
      </Box>
    </Box>
  );
}
