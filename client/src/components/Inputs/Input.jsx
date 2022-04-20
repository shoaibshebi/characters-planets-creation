import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import classes from "./Index.module.scss";
import { capitalize } from "../../utils/utils";

const CustomAreaComponent = (props) => (
  <textarea
    type="text"
    {...props}
    cols="20"
    rows="5"
    wrap="hard"
    maxLength="300"
  />
);

const CustomInputComponent = (props) => <input type="text" {...props} />;
function Input({ name, type, errors, fieldtype, touched, placeholder }) {
  return (
    <>
      <Typography variant="h6" className={classes.label} marginY={2}>
        {capitalize(name)}
      </Typography>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        as={
          fieldtype === "textarea" ? CustomAreaComponent : CustomInputComponent
        }
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
  fieldtype: PropTypes.string,
};

export default Input;
