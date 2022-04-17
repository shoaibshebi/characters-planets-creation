import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Drawer from "../../components/Drawer/Drawer";
import AddModal from "./components/AddModal/AddModal";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";
import AddButton from "../../components/AddButton/AddButton";
// import { useGetPlanets } from "../../gql";

export default function Planets() {
  const [modalOpen, setModalOpen] = useState(false);
  // const { data, loading, error } = useGetPlanets();

  const data = [];
  // console.log("data ", data, loading, error);

  const addHandler = () => {
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
  };
  const handleCreatePlanet = (values) => {
    console.log(values);
    closeHandler();
  };

  return (
    <Box>
      <AddModal
        open={modalOpen}
        handleClose={closeHandler}
        handleCreatePlanet={handleCreatePlanet}
      />
      {/* <Drawer /> */}
      {data.length ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {Array(15)
            .fill()
            .map((_, i) => (
              <Grid item key={i}>
                <Card />
              </Grid>
            ))}
        </Grid>
      ) : (
        <WhySoEmpty text="CREATE PLANET" createHandler={addHandler} />
      )}
      <Box className={classes.button}>
        <AddButton
          icon={<AddIcon className={classes.iconDim} />}
          clickHandler={addHandler}
          br="50%"
          bgclr="#121C33"
          clr="#fff"
          padd="20px"
        />
      </Box>
    </Box>
  );
}
