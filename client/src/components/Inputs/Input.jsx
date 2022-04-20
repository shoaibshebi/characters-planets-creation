import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import classes from "./Index.module.scss";
import { capitalize } from "../../utils/utils";

function Input({ name, type, errors, touched, placeholder }) {
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

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
