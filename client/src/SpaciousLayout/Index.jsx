import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";

import classes from "./Index.module.scss";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { capitalize } from "../utils/utils";

export const LayoutContext = createContext({});

const Index = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pagesTitle, setPagesTitle] = useState("Planets");
  const [charModalOpen, setCharModalOpen] = useState(false);

  const primaryOnClickHandler = (text) => {
    setPagesTitle(text);
    navigate(`/${text.toLowerCase()}`);
  };
  useEffect(() => {
    let path = capitalize(location.pathname.split("/")[1]);
    setPagesTitle(path);
  }, [location]);

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
        <LayoutContext.Provider
          value={{
            charModalOpen,
            setCharModalOpen,
          }}
        >
          {children}
        </LayoutContext.Provider>
      </Box>
    </Box>
  );
};

Index.propTypes = {
  children: PropTypes.node,
};

export default Index;
