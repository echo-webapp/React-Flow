import React from "react";
import "./RightBar.css";
import Avatar from "@mui/material/Avatar";
import Labels from "./labels";
const RightBar = () => {
  return (
    <div className="RightBarMainContainer">
      <div className="RightBarHeader">
        <div className="RightBarHeaderName">Hi, Yuval</div>
        <div className="RightBarHeaderImage">
          <Avatar
            alt="Remy Sharp"
            src="./Assets/sample.png"
            sx={{ width: 30, height: 30 }}
          />
        </div>
      </div>
      <Labels />
    </div>
  );
};

export default RightBar;