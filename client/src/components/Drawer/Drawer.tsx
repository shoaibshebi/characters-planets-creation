import React from "react";
import cxs from "classnames";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, Typography } from "@mui/material";

import classes from "./Drawer.module.scss";
import CharacterTile from "../CharacterTile/CharacterTile";
import DismissButton from "../DismissButton/DismissButton";
import { tooltipTrim } from "../../utils/utils";

interface ICharacter {
  c_id: number;
  name: string;
  picture_url: string;
  description: string;
  planet: IPlanet;
}
interface IPlanet {
  name: string;
}
interface IDataObjCharacter {
  name: string;
  description: string;
  population: number;
  planet: IPlanet;
  characters: ICharacter[];
  picture_url: string;
}
interface IDataObjPlanet {
  p_id: number;
  name: string;
  description: string;
  code: number | string;
  picture_url: string;
  population: number | string;
}
interface Props {
  open: boolean;
  // dataObj: IDataObjPlanet | IDataObjCharacter;
  dataObj: any;
  addHandler: () => void;
  handleClose: () => void;
}

const Drawer: React.FC<Props> = ({
  open,
  dataObj,
  handleClose,
  addHandler,
}) => {
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
      <Typography variant="h6" className={classes.desc} marginY={2}>
        {dataObj.description}
      </Typography>
      <Box marginY={2}>
        <Typography variant="h6" className={classes.statsHead}>
          {"population" in dataObj ? "Population" : "Planet"}
        </Typography>
        <Typography variant="h6" className={classes.stats}>
          {"population" in dataObj
            ? dataObj?.population
            : dataObj?.planet?.name}
        </Typography>
      </Box>
      {"characters" in dataObj && (
        <Grid container justifyContent="space-between">
          <Typography variant="h6" marginY={2}>
            Characters
          </Typography>
          <Typography
            variant="h6"
            onClick={() => addHandler()}
            className={classes.addText}
          >
            +
          </Typography>
        </Grid>
      )}
      {"characters" in dataObj && dataObj?.characters?.length ? (
        <Box className={classes.characters}>
          {dataObj?.characters?.map((x) => (
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
};

Drawer.propTypes = {
  open: PropTypes.bool,
  dataObj: PropTypes.any,
  handleClose: PropTypes.func,
};

export default Drawer;
