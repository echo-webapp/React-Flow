import React from "react";
import CrossIcons from "./Cross.svg";
const CrossIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={CrossIcons}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default CrossIcon;
