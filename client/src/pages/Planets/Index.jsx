import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, Suspense, useContext } from "react";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { useCreatePlanet, useGetPlanets } from "../../gql";
import { LayoutContext } from "../../SpaciousLayout/Index";
import AddButton from "../../components/AddButton/AddButton";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";

const AddModal = React.lazy(() => import("./components/AddModal/AddModal"));
const Drawer = React.lazy(() => import("../../components/Drawer/Drawer"));

function Planets() {
  const navigate = useNavigate();
  const location = useLocation();
  const values = useContext(LayoutContext);
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
  useEffect(() => {
    if (location.pathname === "/planets/create") {
      setModalOpen(true);
    }
  }, [location]);

  if (loading) return <Loader />;
  if (error)
    return <Loader text={("Some thing bad happened.", error.message)} />;

  const addHandler = () => {
    setModalOpen(true);
    navigate("/planets/create");
    setMutationErr("");
  };
  const closeHandler = () => {
    values.setCharModalOpen(false); //setting layout/parent props
    setModalOpen(false);
    navigate("/planets");
  };
  const handleCreatePlanet = async (values) => {
    try {
      await createPlanet({
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
        "Bummer! We can’t create this planet right now. Probably a black hole in the way. Try later please."
      );
    }
  };
  const cardClickHandler = (code) => {
    let cardData =
      data && data?.planets?.nodes.filter((planet) => planet.code === code);
    setCardData({ ...cardData[0] });
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const characterAddHandler = () => {
    values.setCharModalOpen(true); //setting layout/parent props
    navigate("/characters");
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AddModal
          open={modalOpen}
          handleClose={closeHandler}
          mutationErr={mutationErr}
          handleCreatePlanet={handleCreatePlanet}
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
      {data && data?.planets?.nodes ? (
        <Grid container spacing={2} className={classes.tilesContainer}>
          {data &&
            data?.planets?.nodes?.map((x, i) => (
              <Grid item key={x.p_id}>
                <Card
                  code={x.code}
                  title={x.name}
                  newNodeId={newNodeId === x.p_id}
                  image={x.picture_url}
                  population={x.population + ""}
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

export default Planets;
