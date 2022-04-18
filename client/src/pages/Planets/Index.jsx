import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Drawer from "../../components/Drawer/Drawer";
import AddModal from "./components/AddModal/AddModal";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";
import AddButton from "../../components/AddButton/AddButton";
import { useCreatePlanet, useGetPlanets } from "../../gql";
import Loader from "../../components/Loader/Loader";

export default function Planets() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cardData, setCardData] = useState({});

  const { data, loading, error } = useGetPlanets();
  const { createPlanet, data: createdData } = useCreatePlanet();

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const {
    planets: { nodes },
  } = data;

  const addHandler = () => {
    navigate("/planets/create");
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
    navigate("/planets");
  };
  const handleCreatePlanet = (values) => {
    createPlanet({
      variables: {
        planetInfo: {
          name: values.name,
          code: values.code,
          description: values.description,
          picture_url: values.image,
        },
      },
    });

    setModalOpen(false);
    navigate("/planets");
  };
  const cardClickHandler = (code) => {
    let cardData = data.planets.nodes.filter((planet) => planet.code === code);
    setCardData({ ...cardData[0] });
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const characterAddHandler = () => {};

  return (
    <>
      <AddModal
        open={modalOpen}
        handleClose={closeHandler}
        handleCreatePlanet={handleCreatePlanet}
      />
      <Drawer
        open={drawerOpen}
        dataObj={cardData}
        addHandler={characterAddHandler}
        handleClose={handleDrawerClose}
      />
      {nodes?.length ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {nodes?.map((x, i) => (
            <Grid item key={i}>
              <Card
                title={x.name}
                image={x.picture_url}
                code={x.code}
                population={x.population}
                clickHandler={cardClickHandler}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <WhySoEmpty text="CREATE PLANET" createHandler={addHandler} />
      )}
      <AddButton
        icon={<AddIcon />}
        clickHandler={addHandler}
        br="50%"
        bgclr="#121C33"
        clr="#fff"
      />
    </>
  );
}
