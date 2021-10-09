import React from "react";
import "./MessageCard.css";
import MessageIcon from "./Assets/MessageIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const MessageCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="MessageCardHeader">
        <div className="MessageCardHeaderLeft">
          <div className="MessageCardHeaderLeftIcon">
            <MessageIcon height="20px" width="20px" />
          </div>
          <div className="MessageCardHeaderLeftText">Message</div>
        </div>
        <div className="MessageCardHeaderRight">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Delete</MenuItem>
            <MenuItem onClick={handleClose}>Duplicate</MenuItem>
            <MenuItem onClick={handleClose}>CopyLink</MenuItem>
            <MenuItem onClick={handleClose}>Rename</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="MessageCardInputBody">
        <textarea />
      </div>
    </div>
  );
};

export default MessageCard;
