import { Modal, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

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
    height: "450px",
    border: "1px solid #FFFFFF4D",
    borderRadius: "8px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: "center",
  };
  return (
    <MyModal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>{children}</Box>
    </MyModal>
  );
};
export default GeneralModal;
