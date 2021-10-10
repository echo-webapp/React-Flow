import React, { useState } from "react";
import "./MessageCard.css";
import MessageIcon from "./Assets/MessageIcon";
import AddImageIcon from "./Assets/AddImageIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextareaAutosize from "react-textarea-autosize";
import ShowImage from "./ShowImage";
import ListItemIcon from "@mui/material/ListItemIcon";
import CopyLink from "./Assets/CopyLinkIcon";
import DeleteIcons from "./Assets/DeleteIcon";
import DuplicateIcons from "./Assets/DuplicateIcon";
import RenameIcons from "./Assets/RenameIcon";
import MessageOption from "./MessageOption";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menu: {
    display: "flex",
  },
});

const MessageCard = () => {
  const [state, setState] = useState({
    picCount: 0,
    pics: undefined,
  });
  const classes = useStyles();
  const [optionsList, setoptionsList] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addOptionHandler = () => {
    setoptionsList((prevState) => {
      let prevList = [...prevState];
      let size = prevList.length;
      size = size + 1;
      prevList.push("sar");
      console.log(prevList);
      return prevList;
    });
  };
  return (
    <div>
      <div className="MessageCardHeader">
        <div className="MessageCardHeaderLeft">
          <div className="MessageCardHeaderLeftIcon">
            <MessageIcon height="25px" width="25px" />
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
            className={classes.menu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <DeleteIcons height="20px" width="20px" />
              </ListItemIcon>
              <div>Delete</div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <DuplicateIcons height="20px" width="20px" />
              </ListItemIcon>
              <div>Duplicate</div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <CopyLink height="20px" width="20px" />
              </ListItemIcon>
              <div>CopyLink</div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <RenameIcons height="20px" width="20px" />
              </ListItemIcon>
              <div>Rename</div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        id="uploadPic"
        onChange={(e) => {
          let file = e.target.files[0];
          if (!file) return false;
          let pics = Array.isArray(state.pics) ? state.pics : [];
          if (!e.target.files[0]) return false;
          pics.push(e.target.files[0]);
          setState({
            ...state,
            picCount: state.picCount + 1,
            pics: pics,
          });
        }}
        disabled={state.picCount >= 1 ? true : false}
        hidden
      />
      {state.picCount >= 1 && <ShowImage state={state} setState={setState} />}
      <div className="MessageCardInputBody">
        <TextareaAutosize
          placeholder="Type something..."
          onChange={() => {}}
          className="MessageCardInputBodyTextArea"
        />

        {state.picCount === 0 && (
          <div
            className="AddImageIcon"
            onClick={() => {
              document.getElementById("uploadPic").click();
            }}
          >
            <AddImageIcon height="20px" width="20px" />
          </div>
        )}
      </div>
      {optionsList.map((Option) => (
        <MessageOption />
      ))}
      <button className="AddOptionButton" onClick={addOptionHandler}>
        + Add options
      </button>
    </div>
  );
};

export default MessageCard;
