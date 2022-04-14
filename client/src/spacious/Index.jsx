import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import csx from "classnames";

import classes from "./Index.module.scss";
import Card from "../components/Card/Card";
import Drawer from "../components/Drawer/Drawer";
import Modal from "../components/Modal/Modal";

export default function Index() {
  const [pagesTitle, setPagesTitle] = useState("Planets");
  return (
    <Box className={classes.container}>
      <Box className={classes.innerContainer}>
        <Typography variant="h2" className={classes.title} marginY={5}>
          Spacious
        </Typography>
        <Grid container className={classes.pageTitles} marginY={5}>
          <Typography
            component="span"
            className={csx(
              classes.pagesTitle,
              pagesTitle === "Planets" ? classes.clicked : null
            )}
            onClick={() => setPagesTitle("Planets")}
          >
            Planets
          </Typography>
          <Typography
            component="span"
            className={csx(
              classes.pagesTitle,
              pagesTitle === "Characters" ? classes.clicked : null
            )}
            onClick={() => setPagesTitle("Characters")}
          >
            Characters
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {Array(15)
            .fill()
            .map((_, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card key={i} />
              </Grid>
            ))}
        </Grid>
        <Drawer />
        <Modal />
      </Box>
    </Box>
  );
}
