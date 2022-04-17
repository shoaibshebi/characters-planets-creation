import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

import classes from "./Index.module.scss";
import Card from "../components/Card/Card";
import Drawer from "../components/Drawer/Drawer";
import Modal from "../components/Modal/Modal";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Planets from "./Planets/Index";

export default function Index() {
  const [pagesTitle, setPagesTitle] = useState("Planets");
  return (
    <Box className={classes.container}>
      <Box className={classes.innerContainer}>
        <Typography variant="h2" className={classes.title} marginY={5}>
          Spacious
        </Typography>
        <Grid container className={classes.pageTitles} marginY={5}>
          <PrimaryButton
            text="Planets"
            clicked={pagesTitle === "Planets" ? true : false}
            setPagesTitle={setPagesTitle}
          />
          <PrimaryButton
            text="Characters"
            clicked={pagesTitle === "Characters" ? true : false}
            setPagesTitle={setPagesTitle}
          />
        </Grid>
        <Grid container spacing={2} className={classes.tilesContainer}>
          {Array(15)
            .fill()
            .map((_, i) => (
              <Grid item key={i}>
                <Card />
              </Grid>
            ))}
        </Grid>
        <Drawer />
        {/* <Modal /> */}
        <Planets />
      </Box>
    </Box>
  );
}
