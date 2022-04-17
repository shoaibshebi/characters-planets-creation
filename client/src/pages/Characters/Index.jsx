import React from "react";
import { Grid } from "@mui/material";

import classes from "./Index.module.scss";
import Card from "../../components/Card/Card";
import AddModal from "./components/AddModal/AddModal";
import WhySoEmpty from "../../components/WhySoEmpty/WhySoEmpty";

export default function Characters() {
  const data = [];
  return (
    <>
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
        <WhySoEmpty text="CREATE CHARACTER" />
      )}
      <h1>Characters</h1>
    </>
  );
}
