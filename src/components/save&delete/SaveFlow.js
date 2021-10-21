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
    borderRadius: "19.3839px",
    boxShadow: theme.shadows[3],
  },
}));

const AttachQR = (props) => {
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen1(false);
  };
  return (
    <div>
      <Modal
        open={props.open1}
        className={classes.modal}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <div className={classes.paper}>
          <div className="saveHeader">
            <div className="saveHeaderText">Flow title</div>
          </div>
          <input className="saveInput" value="enter your flow name" />
          <div className="saveFooter">
            <button className="footerSave">Save</button>
            <button
              className="footerCancel"
              onClick={() => {
                props.setOpen1(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AttachQR;
