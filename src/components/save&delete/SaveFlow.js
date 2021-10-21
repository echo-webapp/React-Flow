import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import "./SaveFlow.css";
import CrossButtonIcon from "../../Assets/message_card/crossbutton1.svg";

import axios from "axios";
import { useDispatch } from "react-redux";
import { SetFlowName } from "../../store/Reducers/flowName";
import { useSelector } from "react-redux";
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
    width: "340px",
    // height: "250px",
    background: "#F0F2F2",
    borderRadius: "19.3839px",
    boxShadow: theme.shadows[3],
  },
}));

const AttachQR = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const flowNameRedux = useSelector((store) => store.flowName.flowName);
  const [flowName, setFlowName] = useState(
    useSelector((store) => store.flowName.flowName)
  );
  const handleClose = () => {
    props.setOpen1(false);
  };
  const inputHandler = (e) => {
    setFlowName(e.target.value);
    dispatch(SetFlowName(e.target.value));
  };
  const saveFlow = () => {
    const article = { title: "Axios POST Request Example" };
    axios
      .post(`https://pikel-it.com/wapp/wh/infLOW.php?FLOW=${flowName}`, article)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error);
      });
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
            <div
              className="delete-icon"
              onClick={() => {
                props.setOpen1(false);
              }}
            >
              <img src={CrossButtonIcon} alt="x" />
            </div>
          </div>
          <input
            className="saveInput"
            onChange={inputHandler}
            value={flowName}
          />
          <div className="saveFooter">
            <button className="footerSave" onClick={saveFlow}>
              Save
            </button>
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
