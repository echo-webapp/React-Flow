import React, { useRef, useState, useCallback } from "react";
import "./MessageCard.css";
import MessageIcon from "../../Assets/message_card/MessageIcon";
import AddImageIcon from "../../Assets/message_card/AddImageIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import ShowImage from "./ShowImage";
import ListItemIcon from "@mui/material/ListItemIcon";
import CopyLink from "../../Assets/message_card/CopyLinkIcon";
import DeleteIcons from "../../Assets/message_card/DeleteIcon";
import DuplicateIcons from "../../Assets/message_card/DuplicateIcon";
import RenameIcons from "../../Assets/message_card/RenameIcon";
import MessageOption from "./MessageOption";
import { useSelector } from "react-redux";
import {
  AddDescription,
  AddPicture,
  AddOption,
} from "../../store/Reducers/message";
import { useDispatch } from "react-redux";
import { Handle, removeElements } from "react-flow-renderer";

const useStyles = makeStyles({
  menu: {
    display: "flex",
  },
});

const edgeStyle = {
  height: 10,
  width: 10,
  top: "50%",
  borderRadius: "50%",
};

const MessageCard = () => {
  const activeCardId = useSelector(
    (state) => state.cardState.cardState.activeCardId
  );
  const image_element = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    picCount: 0,
    pics: undefined,
  });
  const [optionsList, setoptionsList] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addOptionHandler = useCallback(() => {
    setoptionsList((prevState) => {
      let prevList = [...prevState];
      prevList.push("sar");
      dispatch(AddOption(activeCardId));
      return prevList;
    });
  });

  const descriptionHandler = (e) => {
    let data = {};
    data.description = e.target.value;
    data.id = activeCardId;
    dispatch(AddDescription(data));
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
            <MenuItem
              onClick={() => {
                handleClose();
                // onElementsRemove;
              }}
            >
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
        ref={image_element}
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
          let data = [];
          data.push({ ...state, picCount: state.picCount + 1, pics: pics });
          data.push(activeCardId);
          dispatch(AddPicture(data));
        }}
        disabled={state.picCount >= 1 ? true : false}
        hidden
      />
      {state.picCount >= 1 && <ShowImage state={state} setState={setState} />}
      <div style={{ position: "relative" }} className="MessageCardInputBody">
        <TextareaAutosize
          placeholder="Type something..."
          onChange={descriptionHandler}
          className="MessageCardInputBodyTextArea"
        />
        <Handle
          type="target"
          position="left"
          id={(Math.random() * 1000).toFixed(0)}
          style={edgeStyle}
        />
        <Handle
          type="source"
          position="right"
          id={(Math.random() * 1000).toFixed(0)}
          style={edgeStyle}
        />

        {state.picCount === 0 && (
          <div
            className="AddImageIcon"
            onClick={() => {
              image_element.current.click();
            }}
          >
            <AddImageIcon height="20px" width="20px" />
          </div>
        )}
      </div>

      {optionsList.map((Option, key) => (
        <div key={key} style={{ position: "relative" }}>
          <MessageOption key={key} optionsList={optionsList} index={key} />
          <Handle
            type="target"
            position="left"
            id={(Math.random() * 1000).toFixed(0)}
            style={edgeStyle}
          />
          <Handle
            type="source"
            position="right"
            id={(Math.random() * 1000).toFixed(0)}
            style={edgeStyle}
          />
        </div>
      ))}
      <button className="AddOptionButton" onClick={addOptionHandler}>
        + Add options
      </button>
    </div>
  );
};

export default MessageCard;
