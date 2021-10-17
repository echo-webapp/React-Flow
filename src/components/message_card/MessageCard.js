import React, { useRef, useState, useCallback, useEffect } from "react";
import MessageIcon from "../../Assets/message_card/MessageIcon";
import AddImageIcon from "../../Assets/message_card/AddImageIcon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@material-ui/core";
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
  removeMessage,
  ChangeTitle,
} from "../../store/Reducers/message";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { Handle, removeElements } from "react-flow-renderer";

const useStyles = makeStyles({
  menu: {
    display: "flex",
  },
});

const MessageCard = (props) => {
  const [activeCardId, message] = useSelector((state) => [
    state.cardState.cardState.activeCardId,
    state.messages.message,
  ]);
  const [desc, setdesc] = useState("");
  const image_element = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    picCount: 0,
    pics: undefined,
  });
  const [optionsList, setoptionsList] = useState([]);
  const [title, settitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        setoptionsList(message.data.options);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        setdesc(message.data.description);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        settitle(message.data.title);
      }
      return null;
    });
  }, [message]);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const descriptionHandler = (e) => {
    let data = {};
    data.value = e.target.value;
    data.id = activeCardId;
    dispatch(AddDescription({ data: data, id: props.id }));
  };

  const removeNode = () => {
    dispatch(removeMessage(activeCardId));
  };

  const changeTitle = (e) => {
    dispatch(ChangeTitle({ id: props.id, value: e.target.value }));
  };

  return (
    <S.Container>
      <S.MessageCardHeader>
        <S.MessageCardStatusTag color="secondary"></S.MessageCardStatusTag>
        <S.MessageCardHeaderLeft>
          <S.MessageCardHeaderLeftIcon>
            <MessageIcon height="25px" width="25px" />
          </S.MessageCardHeaderLeftIcon>
          <S.MessageCardHeaderLeftText onChange={changeTitle} value={title} />
        </S.MessageCardHeaderLeft>
        <S.MessageCardHeaderRight>
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
                removeNode();
                handleClose();
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
                <RenameIcons height="20px" width="20px" />
              </ListItemIcon>
              <div>Rename</div>
            </MenuItem>
          </Menu>
        </S.MessageCardHeaderRight>
      </S.MessageCardHeader>
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
      <S.MessageCardInputBody>
        <S.MessageCardInputBodyTextArea
          placeholder="Type something..."
          onChange={descriptionHandler}
          value={desc}
        />
        <Handle
          className="connector"
          type="target"
          position="left"
          id={(Math.random() * 1000).toFixed(0)}
        />
        <Handle
          type="source"
          className="connector"
          position="right"
          id={(Math.random() * 1000).toFixed(0)}
        />

        {state.picCount === 0 && (
          <S.AddImage>
            <div
              onClick={() => {
                image_element.current.click();
              }}
            >
              <AddImageIcon height="20px" width="20px" />
            </div>
          </S.AddImage>
        )}
      </S.MessageCardInputBody>
      {optionsList.map((Option, key) => (
        <div key={key} style={{ position: "relative" }}>
          <MessageOption
            optiontext={optionsList[key]}
            optionsList={optionsList}
            index={key}
          />
          {/* <Handle
            type="target"
            position="left"
            id={(Math.random() * 1000).toFixed(0)}
            style={S.connectorStyle}
          />
          <Handle
            type="source"
            position="right"
            id={(Math.random() * 1000).toFixed(0)}
            style={S.connectorStyle}
          /> */}
        </div>
      ))}
      <S.AddOptionButton onClick={() => dispatch(AddOption(activeCardId))}>
        + Add options
      </S.AddOptionButton>
    </S.Container>
  );
};

export default MessageCard;
