import React from "react";
import Editicons from "./EditIcon.svg";
const EditIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Editicons}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default EditIcon;
