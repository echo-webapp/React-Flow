import React from "react";
import DeleteIcon from "./DeleteIcon.svg";
const DeleteIcons = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={DeleteIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default DeleteIcons;
