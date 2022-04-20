import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
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
  const [cardData, setCardData] = useState({});
  const [newNodeId, setNewNodeId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mutationErr, setMutationErr] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data, loading, error } = useGetPlanets();
  const { createPlanet, data: createdData } = useCreatePlanet();

  useEffect(() => {
    if (createdData?.createPlanet) {
      setNewNodeId(createdData?.createPlanet?.p_id);
    }
  }, [createdData]);

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const addHandler = () => {
    setModalOpen(true);
    navigate("/planets/create");
    setMutationErr("");
  };
  const closeHandler = () => {
    setModalOpen(false);
    navigate("/planets");
  };
  const handleCreatePlanet = (values) => {
    try {
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
    } catch (error) {
      console.log("error here", error);
      setMutationErr(
        "Bummer! We can’t create this planet right now. Probably a black hle in the way. Try later please."
      );
    }
  };
  const cardClickHandler = (code) => {
    let cardData = data?.planets?.nodes.filter(
      (planet) => planet.code === code
    );
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
        mutationErr={mutationErr}
        handleCreatePlanet={handleCreatePlanet}
      />
      <Drawer
        open={drawerOpen}
        dataObj={cardData}
        addHandler={characterAddHandler}
        handleClose={handleDrawerClose}
      />
      {data?.planets?.nodes ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {data?.planets?.nodes?.map((x, i) => (
            <Grid item key={i}>
              <Card
                code={x.code}
                title={x.name}
                newNodeId={newNodeId === x.p_id}
                image={x.picture_url}
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
