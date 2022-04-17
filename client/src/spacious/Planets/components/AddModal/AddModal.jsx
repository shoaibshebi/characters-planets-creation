import React from "react";
import { Formik, Form, Field } from "formik";
import { Typography, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./AddModal.module.scss";
import Input from "../../../../components/Inputs/Input";
import GeneralModal from "../../../../components/Modal/Modal";
import { CreatePlanetFormValidation } from "../../../../utils/formValidations";
import SecondaryButton from "../../../../components/SecondaryButton/SecondaryButton";
import DismissButton from "../../../../components/DismissButton/DismissButton";

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
    <GeneralModal open={true}>
      <Grid container justifyContent="right">
        <DismissButton clickHandler={closeHandler} icon={<CloseIcon />} />
      </Grid>
      <Typography variant="h6" className={classes.title} marginY={2}>
        Spacious
      </Typography>
      <Formik
        initialValues={{
          name: "",
          code: "",
          description: "",
          image: "",
        }}
        validationSchema={CreatePlanetFormValidation}
        onSubmit={(values) => handleCreatePlanet(values)}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {/* <Field name="name" /> */}
              <Input
                label="Name"
                name="name"
                type="text"
                required={true}
                onchange={handleChange}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <p className={classes.err}>{errors.name}</p>
              ) : null}
              <Input
                placeholder="e.g. PI-NOE-01"
                label="Code"
                name="code"
                type="text"
                required={true}
                onchange={handleChange}
                value={values.code}
              />
              {errors.code && touched.code ? (
                <p className={classes.err}>{errors.code}</p>
              ) : null}
              <Input
                placeholder="Note: Paste the URL of a JPG or PNG of max 20 kb"
                label="Image"
                name="image"
                type="text"
                required={true}
                onchange={handleChange}
                value={values.image}
              />
              {errors.image && touched.image ? (
                <p className={classes.err}>{errors.image}</p>
              ) : null}
              <Input
                label="Description"
                name="description"
                type="text"
                required={true}
                onchange={handleChange}
                value={values.description}
              />
              {errors.description && touched.description ? (
                <p className={classes.err}>{errors.description}</p>
              ) : null}

              <Grid container justifyContent="right" pt={5}>
                <SecondaryButton
                  text="CANCEL"
                  bgColor="rgba(18, 28, 51, 0.05)"
                  clor="black"
                  clickHandler={cancalHandler}
                  px="24px"
                  py="12px"
                />
                &nbsp;&nbsp;
                <SecondaryButton
                  text="CREATE PLANET"
                  bgColor="black"
                  clor="whitesmoke"
                  clickHandler={createHandler}
                  px="24px"
                  py="12px"
                />
              </Grid>
              {/* <FormSubmitButton
                  <SecondaryButton text="CANCEL" bgColor="rgba(18, 28, 51, 0.05)" clor="black" clickHandler={cancalHandler} px="24px" py="12px"  />
                  <SecondaryButton text="CREATE PLANET" bgColor="black" clor="whitesmoke" clickHandler={createHandler} px="24px" py="12px"  />
              {/* <FormSubmitButton
                title={"Add User"}
                clickHandler={function () {}}
              /> */}
            </Form>
          );
        }}
      </Formik>
    </GeneralModal>
  );
}
