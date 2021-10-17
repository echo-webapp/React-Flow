import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import RadioButton from "./RadioButton";
import DeleteIcon from "../../Assets/RightBar/DeleteIcon";
import EditIcon from "../../Assets/RightBar/EditIcon";
const Description = () => {
  const [state, setState] = useState({
    picCount: 0,
    pics: undefined,
  });
  const [selectedValue, setSelectedValue] = React.useState("");
  const [iconFlag, setIconFlag] = React.useState(true);

  const iconButtonHandler = () => {
    setIconFlag(false);
  };
  return (
    <div className="LeftDescriptionContainer">
      <div className="LeftDescriptionContainerHeader">
        <div className="DescriptionHeaderText">Description</div>
        <div className="DescriptionHeaderIcon" onClick={iconButtonHandler}>
          <EditIcon height="15px" width="15px" />
        </div>
      </div>
      <div className="LeftDescriptionTextBody">
        <TextareaAutosize
          className="LeftDescriptionText"
          placeholder="Create the description ..."
          disabled={iconFlag}
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
