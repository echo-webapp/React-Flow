import React from "react";
import AddImageIcon from "./AddImage.svg";
const ImageIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={AddImageIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default ImageIcon;
