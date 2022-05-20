import React from "react";
import PropTypes from "prop-types";
import cxs from "classnames";

import classes from "./Index.module.scss";
import { capitalize } from "../../utils/utils";

interface IOptions {
  name: string;
}
interface Props {
  name: string;
  label: string;
  selectHandler: (e: any) => void;
  options: IOptions[];
  value: string;
}

const DropDownField: React.FC<Props> = ({
  name,
  label,
  selectHandler,
  options,
  value,
}) => {
  return (
    <select
      name={name}
      // label={label}
      onChange={(e) => selectHandler(e)}
      className={cxs(classes.input, classes.selectInput)}
      value={value}
    >
      {options.map((x, i) => (
        <option value={x.name} key={i}>
          {"Planet: " + capitalize(x.name)}
        </option>
      ))}
    </select>
  );
};

DropDownField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  selectHandler: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};

export default DropDownField;
