import { styled } from "@mui/system";
import { Modal, Box, Grid } from "@mui/material";

import classes from "./Modal.module.scss";

const MyModal = styled(Modal)({
  "& .MuiBox-root": {
    background: "#FFFFFF",
  },
});

const GeneralModal = ({ open, handleClose, children }) => {
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
      {/* <Grid container>
        <Grid item xs={12} md={6} style={style}>
          {children}
        </Grid>
      </Grid> */}
      <Box sx={{ ...style }} className={classes.container}>
        {children}
      </Box>
    </MyModal>
  );
};
export default GeneralModal;
