import React from "react";
import DeleteIcons from "./Delete.svg";
const DeleteIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={DeleteIcons}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default DeleteIcon;
