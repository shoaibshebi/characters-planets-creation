import React from "react";

import classes from "./SecondaryButton.module.scss";

interface Props {
  text: string;
  clicked: boolean;
  clickHandler: () => void;
  px: string;
  py: string;
  bgColor: string;
  clor: string;
}

const SecondaryButton: React.FC<Props> = ({
  px,
  py,
  text,
  clor,
  bgColor,
  clickHandler,
}) => {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: bgColor,
        color: clor,
        borderRadius: "8px",
        paddingTop: py,
        paddingBottom: py,
        paddingLeft: px,
        paddingRight: px,
        border: "none",
      }}
      onClick={() => clickHandler()}
      className={classes.secondaryButton}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
