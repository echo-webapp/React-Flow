import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@material-ui/core";
export const Container = styled.div`
  cursor: default;
  border-radius: 12px;
  border: ${(props) =>
    props.activeId == props.id ? "2px solid var(--primary-color)" : "none"};
  box-shadow: ${(props) =>
    props.activeId == props.id
      ? "4px 8px 8px rgba(103, 39, 242, 0.3)"
      : "none"};
`;

export const MessageCardStatus = styled.div`
  height: 15px;
  width: 100%;
  background-color: var(--white);
  display: flex;
  position: absolute;
  flex-direction: row-reverse;
  align-content: center;
`;

export const MessageCardStatusTag = styled.div`
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  padding: 0px 10px;
  height: 10px;
  text-align: center;
  border-top-right-radius: 10px;
  background-color: ${(props) => (props.color != null ? props.color : "none")};
`;

export const MessageCardHeader = styled.div`
  width: 259px;
  height: 48px;
  background: var(--white);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #8f8c8c;
`;

export const MessageCardHeaderLeft = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

export const MessageCardHeaderTitle = styled(TextareaAutosize)`
  position: absolute;
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  width: 150px;
  height: 15px;
  overflow: hidden;
  margin-left: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 15px;
  margin-top: 4px;
  cursor: default;
  &:focus{
    cursor: text;
  }
`;

export const MessageCardHeaderLeftIcon = styled.div`
  margin-left: 15px;
`;

export const MessageCardHeaderRight = styled.div`
  margin-right: 10px;
  transform: translateX(20%);
  border-radius: 50% !important;
  padding: 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const DeleteIconDiv = styled.div``;

export const MessageCardInputBody = styled.div`
  width: 259px;
  min-height: 92px;
  background: var(--white);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px 20px 20px;
  .connector {
    height: 15px;
    width: 15px;
    top: 50%;
    border-radius: 50%;
    background: var(--gradient-green);
    border: 2px solid var(--white);
  }
`;

export const MessageCardInputBodyTextArea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  resize: none;
  outline: none;
  height: min-content;
  overflow: hidden;
  margin-bottom: 14px;
  line-height: 18px;
  /* &:focus {
    border: 2px solid #bcbcbc;
  } */
`;

export const AddOptionButton = styled.button`
  width: 259px;
  height: 44px;
  background: var(--primary-color);
  border-radius: 0px 0px 10px 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  color: #ffffff;
`;

export const AddImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  &:hover {
    div {
      cursor: pointer;
      svg {
        fill: grey;
        stroke: grey;
      }
    }
  }
`;

export const ImageOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
`;

export const MessageUploadPic = styled.div`
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
`;

export const UploadPicRemoveButton = styled.div`
  background-color: rgba(0, 0, 0, 0.77) !important;
  padding: 4px !important;
  margin: 2px !important;
`;

export const OptionMenulist = styled.div`
  width: 259px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #c4c4c4;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  padding-left: 20px;
  /* identical to box height */
  color: #000000;
`;

export const MessageCardOptionInputBody = styled.div`
  width: 259px;
  min-height: 28px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 28px 8px 20px;
  border-bottom: ${(props) => {
    return props.border[props.index] == true &&
      !(props.index == props.total_option - 1)
      ? "2px solid var(--primary-color)"
      : "none";
  }};
  border-top: ${(props) =>
    props.border[props.index] == 0 ? "2px solid var(--primary-color)" : "none"};
`;

export const MessageCardOptionInputBodyTextArea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  height: min-content;
  overflow: hidden;
  line-height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
`;

export const CrossButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 8px rgba(103, 39, 242, 0.3);
  }
`;
