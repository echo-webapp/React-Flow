import React from "react";
import DuplicateIcon from "./DuplicateIcon.svg";
const DuplicateIcons = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={DuplicateIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default DuplicateIcons;
