import React from "react";
import cxs from "classnames";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./Drawer.module.scss";
import CharacterTile from "../CharacterTile/CharacterTile";
import DismissButton from "../DismissButton/DismissButton";
import { tooltipTrim } from "../../utils/utils";

function Drawer({ open, dataObj, handleClose }) {
  return (
    <Box
      className={cxs(classes.container, open ? classes.open : classes.closed)}
    >
      <Grid container justifyContent="right">
        <DismissButton
          pt="3px"
          pb="0"
          pl="3px"
          pr="3px"
          clickHandler={handleClose}
          icon={<CloseIcon />}
        />
      </Grid>
      <Typography variant="h6" className={classes.title} marginY={2}>
        {tooltipTrim(dataObj?.name, 15)}
      </Typography>
      <Typography variant="p" className={classes.desc} marginY={2}>
        {dataObj.description}
      </Typography>
      <Box marginY={2}>
        <Typography variant="h6" className={classes.statsHead}>
          {"population" in dataObj ? "Population" : "Planet"}
        </Typography>
        <Typography variant="p" className={classes.stats}>
          {"population" in dataObj
            ? dataObj?.population
            : dataObj?.planet?.name}
        </Typography>
      </Box>
      {"characters" in dataObj && (
        <Grid container justifyContent="space-between">
          <Typography variant="h6" className={classes.charsText} marginY={2}>
            Characters
          </Typography>
          <Typography
            variant="h6"
            className={classes.charsText}
            marginY={2}
            pr={3}
          >
            {dataObj?.characters?.length}
          </Typography>
        </Grid>
      )}
      {"characters" in dataObj && dataObj?.characters?.length ? (
        <Box className={classes.characters}>
          {dataObj?.characters?.map((x, i) => (
            <CharacterTile
              key={x.c_id}
              title={x.name}
              img={x.picture_url}
              description={x.description}
            />
          ))}
        </Box>
      ) : (
        <Box className={classes.profilePicContainer}>
          <img
            alt=" "
            src={dataObj.picture_url}
            className={classes.profilePic}
          />
        </Box>
      )}
    </Box>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool,
  dataObj: PropTypes.object,
  handleClose: PropTypes.func,
};

export default Drawer;
