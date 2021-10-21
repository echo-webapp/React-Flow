import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import "./SaveFlow.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "409px",
    height: "270px",
    background: "#F0F2F2",
    borderRadius: "10px",
  },
}));

const DeleteFlow = (props) => {
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen2(false);
  };
  return (
    <div>
      <Modal
        open={props.open2}
        className={classes.modal}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <div className={classes.paper}>
          <div className="saveHeader">
            <div className="saveHeaderText">Delete Flow</div>
          </div>
          <div className="saveBody">
            Are you sure you wanna delete this entire flow ?
          </div>
          <div className="saveFooter">
            <button
              className="footerCancelDelete"
              onClick={() => {
                props.setOpen2(false);
              }}
            >
              Cancel
            </button>
            <button
              className="footerDelete"
              onClick={() => {
                localStorage.removeItem("persist:root");
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteFlow;
