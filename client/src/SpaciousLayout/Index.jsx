import React, {
  useState,
  useEffect,
  Children,
  createElement,
  cloneElement,
} from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import classes from "./Index.module.scss";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import { capitalize } from "../utils/utils";

const Index = (props) => {
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
        {Children.map(props.children, (child) =>
          cloneElement(child, {
            charModalOpen: charModalOpen,
            setCharModalOpen: setCharModalOpen,
          })
        )}
      </Box>
    </Box>
  );
};
export default Index;
