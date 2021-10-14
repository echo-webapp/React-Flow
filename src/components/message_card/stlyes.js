import { withTheme } from "@material-ui/styles";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const connectorStyle = {
  height: 10,
  width: 10,
  top: "50%",
  borderRadius: "50%",
};

export const MessageCardHeader = withTheme(styled("div")`
  width: 259px;
  height: 48px;
  background: #ebebeb;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8f8c8c;
`);

export const MessageCardHeaderLeft = withTheme(styled("div")`
  display: flex;
`);

export const MessageCardHeaderLeftText = withTheme(styled("div")`
  position: absolute;
  width: 46px;
  height: 15px;
  margin-left: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 15px;
  margin-top: 4px;
`);

export const MessageCardHeaderLeftIcon = withTheme(
  styled("div")`
    margin-left: 15px;
  `
);

export const MessageCardHeaderRight = withTheme(
  styled("div")`
    margin-right: 10px;
  `
);

export const MessageCardInputBody = withTheme(styled("div")`
  width: 259px;
  min-height: 92px;
  background: #ebebeb;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px 20px 20px;
`);

export const MessageCardInputBodyTextArea = withTheme(styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #bcbcbc;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  resize: none;
  outline: none;
  height: min-content;
  overflow: hidden;
  margin-bottom: 14px;
  line-height: 18px;
`);

export const AddOptionButton = withTheme(styled("button")`
  width: 259px;
  height: 44px;
  background: #414141;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 15px;
  color: #ffffff;
`);

export const AddImage = withTheme(styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  &:hover {
    div {
      cursor: pointer;
    }
  }
`);

export const ImageOption = withTheme(styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
`);

export const MessageUploadPic = withTheme(styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 259px !important;
  height: 150px !important;
  background: #ebebeb;
  border-bottom: 1px solid #8f8c8c;
  /* padding: 24px 28px 20px 20px; */
  cursor: pointer;
`);

export const UploadPicRemoveButton = withTheme(styled("div")`
  background-color: rgba(0, 0, 0, 0.77) !important;
  padding: 4px !important;
  margin: 2px !important;
`);

export const OptionMenulist = withTheme(styled("div")`
  box-sizing: border-box;
  width: 259px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #c4c4c4;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  padding-left: 20px;
  /* identical to box height */
  color: #000000;
`);

export const MessageCardOptionInputBody = withTheme(styled("div")`
  box-sizing: border-box;
  width: 259px;
  min-height: 28px;
  background: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 28px 8px 20px;
  border-bottom: 1px solid #8f8c8c;
`);

export const MessageCardOptionInputBodyTextArea = withTheme(styled(
  TextareaAutosize
)`
  width: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  height: min-content;
  overflow: hidden;
  line-height: 18px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
`);