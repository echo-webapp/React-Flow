import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import RadioButton from "./RadioButton";
import DeleteIcon from "../../Assets/RightBar/DeleteIcon";
import EditIcon from "../../Assets/RightBar/EditIcon";
import { useDispatch } from "react-redux";
import { AddEdgeLabel, RemoveEdge } from "../../store/Reducers/message";
import { RemoveActiveEdge } from "../../store/Reducers/cardState";
import { useSelector } from "react-redux";

const EdgeLabel = (props) => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.messages.message);

  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    for (let i = 0; i < message.length; i++) {
      if (props.activeEdgeId == message[i].id) {
        setDescriptionText(message[i]?.label);
      }
    }
  }, [message]);

  const deleteButtonHandler = () => {
    let data = {};
    data.id = props.activeEdgeId;
    dispatch(RemoveEdge(data));
    dispatch(RemoveActiveEdge());
  };

  const descriptionHandler = (e) => {
    // setDescriptionText(e.target.value);
    let data = {};
    data.value = e.target.value;
    data.id = props.activeEdgeId;
    dispatch(AddEdgeLabel(data));
  };

  return (
    <div className="LeftDescriptionContainer">
      <div
        className="LeftDescriptionContainerHeader "
        style={{
          borderBottom: "1px solid var(--primary-color)",
        }}
      >
        <div className="DescriptionHeaderText">Title</div>
        <div className="DescriptionHeaderIcon" onClick={deleteButtonHandler}>
          <DeleteIcon height="15px" width="15px" />
        </div>
      </div>
      <div className="LeftDescriptionTextBody" style={{ paddingTop: 12 }}>
        <TextareaAutosize
          maxLength="500"
          className="LeftDescriptionText"
          placeholder="Create the description ..."
          value={descriptionText}
          onChange={descriptionHandler}
        />
      </div>
      <div className="LeftDescriptionImageIcon"></div>
    </div>
  );
};
export default EdgeLabel;
