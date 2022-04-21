import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, Suspense, useContext } from "react";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import { LayoutContext } from "../../SpaciousLayout/Index";
import AddButton from "../../components/AddButton/AddButton";
import { useCreateCharacter, useGetCharacters } from "../../gql";

const AddModal = React.lazy(() => import("./components/AddModal/AddModal"));
const Drawer = React.lazy(() => import("../../components/Drawer/Drawer"));

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = useContext(LayoutContext);
  const [cardData, setCardData] = useState({});
  const [newNodeId, setNewNodeId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mutationErr, setMutationErr] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chars, setChars] = useState([]);

  const { data, loading, error } = useGetCharacters();
  const { createCharacter, data: createdData } = useCreateCharacter();

  // const {
  //   characters: { nodes },
  // } = data;

  const nodes = data?.characters?.nodes;

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
  useEffect(() => {
    if (values.charModalOpen) {
      navigate("/characters/create");
      setModalOpen(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (nodes && values.selectedPlanet !== "All") {
      let charsFiltered = nodes.filter((x) => {
        return x.planet.name === values.selectedPlanet;
      });
      setChars(charsFiltered);
    } else {
      setChars(nodes);
    }
  }, [values.selectedPlanet, nodes]);

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const addHandler = () => {
    navigate("/characters/create");
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
    values.setCharModalOpen(false); //setting layout/parent props
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
    let cardData = nodes?.filter((character) => character.c_id === id);
    setCardData({ ...cardData[0] });
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

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
          addHandler={() => {}}
          handleClose={handleDrawerClose}
        />
      </Suspense>
      {chars?.length ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {chars?.map((x, i) => (
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
        <NotFound text={"No CAHRACTERS FOUND"} code="" />
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
