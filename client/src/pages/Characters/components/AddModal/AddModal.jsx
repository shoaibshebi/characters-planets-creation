import React from "react";
import { Formik, Form } from "formik";
import { Typography, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./AddModal.module.scss";
import Input from "../../../../components/Inputs/Input";
import GeneralModal from "../../../../components/Modal/Modal";
import { CreatePlanetFormValidation } from "../../../../utils/formValidations";
import SecondaryButton from "../../../../components/SecondaryButton/SecondaryButton";
import DismissButton from "../../../../components/DismissButton/DismissButton";

const Fields = ["name", "planet", "image", "description"];

export default function AddModal({ handleCreatePlanet }) {
  const cancalHandler = () => {
    console.log("cancel");
  };
  const createHandler = () => {
    console.log("create");
  };
  const closeHandler = () => {
    console.log("create");
  };
  return (
    <GeneralModal>
      <Grid container justifyContent="right">
        <DismissButton clickHandler={closeHandler} icon={<CloseIcon />} />
      </Grid>
      <Typography variant="h6" className={classes.title} marginY={2}>
        Character
      </Typography>
      <Formik
        initialValues={{
          name: "",
          planet: "",
          image: "",
          description: "",
        }}
        validationSchema={CreatePlanetFormValidation}
        onSubmit={(values) => handleCreatePlanet(values)}
      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {Fields.map((field, index) => (
                <Input
                  key={index}
                  name={field}
                  type="text"
                  errors={errors}
                  touched={touched}
                  placeholder={
                    field === "planet"
                      ? "Planet Code e.g. PI-NOE-01, Planet the character lives on"
                      : field === "image"
                      ? "Note: Paste the URL of a JPG or PNG of max 20 kb"
                      : ""
                  }
                />
              ))}

              <Grid container justifyContent="right" pt={5}>
                <SecondaryButton
                  text="CANCEL"
                  bgColor="rgba(18, 28, 51, 0.05)"
                  clor="#121C33"
                  clickHandler={cancalHandler}
                  px="24px"
                  py="12px"
                />
                &nbsp;&nbsp;
                <SecondaryButton
                  text="CREATE CHARACTER"
                  bgColor="#121C33"
                  clor="whitesmoke"
                  clickHandler={createHandler}
                  px="24px"
                  py="12px"
                />
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </GeneralModal>
  );
}
