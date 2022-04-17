import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, bottomNavigationClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";

import classes from "./Index.module.scss";
import Card from "../components/Card/Card";
import Drawer from "../components/Drawer/Drawer";
import Modal from "../components/Modal/Modal";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Planets from "../pages/Planets/Index";
import WhySoEmpty from "../components/WhySoEmpty/WhySoEmpty";

export default function Index({ children }) {
  const navigate = useNavigate();
  const [pagesTitle, setPagesTitle] = useState("Planets");

  const primaryOnClickHandler = (text) => {
    setPagesTitle(text);
    navigate(`/${text.toLowerCase()}`);
  };
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
            onClickHandler={primaryOnClickHandler}
          />
          <PrimaryButton
            text="Characters"
            clicked={pagesTitle === "Characters" ? true : false}
            onClickHandler={primaryOnClickHandler}
          />
        </Grid>
        {children}
      </Box>
    </Box>
  );
}
