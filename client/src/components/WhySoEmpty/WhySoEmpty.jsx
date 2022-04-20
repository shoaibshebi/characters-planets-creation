import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

import classes from "./WhySoEmpty.module.scss";
import planetLoaderIcon from "../../assets/images/planet-loader.svg";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

function WhySoEmpty({ text, createHandler }) {
  return (
    <Grid container className={classes.container}>
      <img alt="planet icon" src={planetLoaderIcon} />
      <Typography variant="h6" className={classes.title} marginY={5}>
        Space doesn’t have to be so empty.
      </Typography>
      <SecondaryButton
        text={text}
        bgColor="#121C33"
        clor="whitesmoke"
        clickHandler={createHandler}
        px="24px"
        py="12px"
      />
    </Grid>
  );
}

WhySoEmpty.propTypes = {
  text: PropTypes.string,
  createHandler: PropTypes.func,
};

export default WhySoEmpty;
