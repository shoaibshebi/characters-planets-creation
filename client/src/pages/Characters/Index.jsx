import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, Suspense } from "react";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";
import AddButton from "../../components/AddButton/AddButton";
import { useCreateCharacter, useGetCharacters } from "../../gql";

const AddModal = React.lazy(() => import("./components/AddModal/AddModal"));
const Drawer = React.lazy(() => import("../../components/Drawer/Drawer"));

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardData, setCardData] = useState({});
  const [newNodeId, setNewNodeId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mutationErr, setMutationErr] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data, loading, error } = useGetCharacters();
  const { createCharacter, data: createdData } = useCreateCharacter();

  useEffect(() => {
    if (createdData?.createCharacter) {
      setNewNodeId(createdData?.createCharacter?.c_id);
    }
  }, [createdData]);
  useEffect(() => {
    if (location.pathname === "/characters/create") {
      setModalOpen(true);
    }
  }, [location]);

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const {
    characters: { nodes },
  } = data;

  const addHandler = () => {
    navigate("/characters/create");
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
    setMutationErr("");
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
      closeHandler();
      navigate("/characters");
    } catch (error) {
      console.log("error here", error);
      setMutationErr(
        "Bummer! We can’t create this character right now. Probably planet not found. Try later please."
      );
    }
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
      <Suspense fallback={<Loader />}>
        <AddModal
          open={modalOpen}
          handleClose={closeHandler}
          mutationErr={mutationErr}
          handleCreateCharacter={handleCreateCharacter}
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Drawer
          open={drawerOpen}
          dataObj={cardData}
          addHandler={characterAddHandler}
          handleClose={handleDrawerClose}
        />
      </Suspense>
      {nodes.length ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {nodes?.map((x, i) => (
            <Grid item key={i}>
              <Card
                id={x.c_id}
                title={x.name}
                code=""
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
