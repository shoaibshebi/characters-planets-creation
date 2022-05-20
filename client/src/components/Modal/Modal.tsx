import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Modal, Box } from "@mui/material";

import classes from "./Modal.module.scss";

const MyModal = styled(Modal)({
  "& .MuiBox-root": {
    background: "#FFFFFF",
  },
});

interface Props {
  open: boolean;
  handleClose: (arg: boolean) => void;
  children: React.ReactNode;
}

const GeneralModal: React.FC<Props> = ({ open, handleClose, children }) => {
  const style = {
    color: "whitesmoke",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "650px",
    border: "1px solid #FFFFFF4D",
    borderRadius: "8px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: "left",
  };
  return (
    <MyModal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }} className={classes.container}>
        {children}
      </Box>
    </MyModal>
  );
};

GeneralModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};

export default GeneralModal;
