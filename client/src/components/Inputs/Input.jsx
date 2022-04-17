import React from "react";
import { Typography } from "@mui/material";

import classes from "./Index.module.scss";

export default function Input({
  label,
  placeholder,
  name,
  type,
  required,
  disabled,
  onchange,
  value,
}) {
  return (
    <>
      <Typography variant="h6" className={classes.label} marginY={2}>
        {label}
      </Typography>
      <input
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        required={required}
        onChange={onchange}
        className={classes.input}
        placeholder={placeholder}
      />
    </>
  );
}
