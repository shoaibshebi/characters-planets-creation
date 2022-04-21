import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";

import classes from "./Index.module.scss";
import { capitalize } from "../utils/utils";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import DropDownField from "../components/Inputs/DropDownField";
import { useGetPlanets } from "../gql";

export const LayoutContext = createContext({});

const Index = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useGetPlanets();
  const [pagesTitle, setPagesTitle] = useState("Planets");
  const [selectedPlanet, setSelectedPlanet] = useState("All");
  const [charModalOpen, setCharModalOpen] = useState(false);

  useEffect(() => {
    let path = capitalize(location.pathname.split("/")[1]);
    setPagesTitle(path);
  }, [location]);

  const primaryOnClickHandler = (text) => {
    setPagesTitle(text);
    navigate(`/${text.toLowerCase()}`);
  };
  const selectHandler = (e) => {
    setSelectedPlanet(e.target.value);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.innerContainer}>
        <Typography variant="h2" className={classes.title} marginY={5}>
          Spacious
        </Typography>
        <Grid container className={classes.pageTitles} marginY={5}>
          <Grid item>
            <PrimaryButton
              text="Planets"
              onClickHandler={primaryOnClickHandler}
              clicked={pagesTitle === "Planets" ? true : false}
            />
            <PrimaryButton
              text="Characters"
              clicked={pagesTitle === "Characters" ? true : false}
              onClickHandler={primaryOnClickHandler}
            />
          </Grid>
          {(location.pathname === "/characters" ||
            location.pathname === "/characters/create") && (
            <Grid item>
              <DropDownField
                label="Select planet"
                name="characters"
                selectHandler={selectHandler}
                options={[{ name: "All" }, ...data.planets.nodes]}
                value={selectedPlanet}
              />
            </Grid>
          )}
        </Grid>

        <LayoutContext.Provider
          value={{
            charModalOpen,
            setCharModalOpen,
            selectedPlanet,
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
