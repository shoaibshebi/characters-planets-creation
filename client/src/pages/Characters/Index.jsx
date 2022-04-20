import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Drawer from "../../components/Drawer/Drawer";
import Loader from "../../components/Loader/Loader";
import AddModal from "./components/AddModal/AddModal";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";
import AddButton from "../../components/AddButton/AddButton";
import { useCreateCharacter, useGetCharacters } from "../../gql";

export default function Characters(props) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newNodeId, setNewNodeId] = useState(null);
  const [cardData, setCardData] = useState({});

  const { data, loading, error } = useGetCharacters();
  const { createCharacter, data: createdData } = useCreateCharacter();

  useEffect(() => {
    if (createdData?.createCharacter) {
      setNewNodeId(createdData?.createCharacter?.c_id);
    }
  }, [createdData]);

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const {
    characters: { nodes },
  } = data;

  console.log("created ", createdData);
  const addHandler = () => {
    navigate("/characters/create");
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
    navigate("/characters");
  };
  const handleCreateCharacter = async (values) => {
    try {
      await createCharacter({
        variables: {
          characterInfo: {
            name: values.name,
            planet: values.planet,
            picture_url: values.image,
            description: values.description,
          },
        },
      });
    } catch (error) {
      console.log("error ", error);
    }
    // closeHandler();
    navigate("/characters");
  };
  const cardClickHandler = (id) => {
    let cardData = data?.characters.nodes.filter(
      (character) => character.c_id === id
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
        handleCreateCharacter={handleCreateCharacter}
      />
      <Drawer
        open={drawerOpen}
        dataObj={cardData}
        addHandler={characterAddHandler}
        handleClose={handleDrawerClose}
      />
      {nodes.length ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {nodes?.map((x, i) => (
            <Grid item key={i}>
              <Card
                id={x.c_id}
                title={x.name}
                code={x.planet}
                newNodeId={newNodeId === x.c_id}
                image={x.picture_url}
                population={"no data"}
                description={x.description}
                clickHandler={cardClickHandler}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <WhySoEmpty text="CREATE CHARACTER" createHandler={addHandler} />
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
