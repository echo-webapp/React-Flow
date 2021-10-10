import React from "react";
import RenameIcon from "./Rename.svg";
const RenameIcons = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={RenameIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default RenameIcons;
