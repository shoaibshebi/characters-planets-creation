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

const Fields = ["name", "code", "image", "description"];

export default function AddModal({ open, handleClose, handleCreatePlanet }) {
  return (
    <GeneralModal open={open} handleClose={handleClose}>
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
        Spacious
      </Typography>
      <Formik
        initialValues={{
          name: "",
          code: "",
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
                    field === "code"
                      ? "e.g. PI-NOE-01"
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
                  clickHandler={handleClose}
                  px="24px"
                  py="12px"
                />
                &nbsp;&nbsp;
                <SecondaryButton
                  text="CREATE PLANET"
                  bgColor="#121C33"
                  clor="whitesmoke"
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