import React from "react";
import { Typography } from "@mui/material";
import { Field } from "formik";

import classes from "./Index.module.scss";
import { capitalize } from "../../utils/utils";

export default function Input({ name, type, errors, touched, placeholder }) {
  return (
    <>
      <Typography variant="h6" className={classes.label} marginY={2}>
        {capitalize(name)}
      </Typography>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={classes.input}
      />
      {errors[name] && touched[name] ? (
        <p className={classes.err}>{capitalize(errors[name])}</p>
      ) : null}
    </>
  );
}
