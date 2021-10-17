import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import RadioButton from "./RadioButton";
import DeleteIcon from "../../Assets/RightBar/DeleteIcon";
import EditIcon from "../../Assets/RightBar/EditIcon";
import { useDispatch } from "react-redux";
import {
  AddRightSideDescription,
  DeleteRightSideDescription,
} from "../../store/Reducers/message";
const Description = (props) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState("");
  const [iconFlag, setIconFlag] = React.useState(true);
  const [temp, setTemp] = React.useState(false);
  const [descriptionText, setDescriptionText] = React.useState("");
  const iconButtonHandler = () => {
    setIconFlag(false);
    setTemp(true);
  };
  useEffect(() => {
    if (props.currentCard?.data?.messageDescription === undefined) {
      setIconFlag(false);
    } else {
      setDescriptionText(props.currentCard?.data?.messageDescription);
    }
  }, [props.currentCard]);

  const deleteButtonHandler = () => {
    let data = {};
    data.id = props.activeCardId;
    dispatch(DeleteRightSideDescription(data));
  };
  const descriptionHandler = (e) => {
    setDescriptionText(e.target.value);
    let data = {};
    data.description = e.target.value;
    data.id = props.activeCardId;
    dispatch(AddRightSideDescription(data));
  };
  return (
    <div className="LeftDescriptionContainer">
      <div className="LeftDescriptionContainerHeader">
        <div className="DescriptionHeaderText">Description</div>
        {!temp && (
          <div className="DescriptionHeaderIcon" onClick={iconButtonHandler}>
            <EditIcon height="15px" width="15px" />
          </div>
        )}
        {temp && (
          <div className="DescriptionHeaderIcon" onClick={deleteButtonHandler}>
            <DeleteIcon height="15px" width="15px" />
          </div>
        )}
      </div>
      <div className="LeftDescriptionTextBody">
        <TextareaAutosize
          className="LeftDescriptionText"
          placeholder="Create the description ..."
          disabled={iconFlag}
          value={descriptionText}
          onChange={descriptionHandler}
          onBlur={() => {
            setTemp(false);
            setIconFlag(true);
          }}
        />
      </div>
      <div className="LeftDescriptionImageIcon"></div>
      <div className="LeftDescriptionButton">
        <RadioButton
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
    </div>
  );
};
export default Description;
