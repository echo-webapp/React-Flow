import styled from "styled-components";
import { withTheme } from "@material-ui/core";

export const MainContainer = withTheme(styled("div")`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 9;
`);

export const Container = withTheme(styled("div")`
  display: flex;
  border-radius: 40px;
  height: 80px;
  width: 610px;
  margin-left: 20px;
  background: var(--white);
  border: 1px solid var(--primary-color);
`);

export const ToolBar = withTheme(styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: var(--primary-color);
  div {
    div {
      padding: 10px;
    }
    .move-tool {
      border-top-left-radius: 40px;
      background: var(--gradient-green);
    }
    .hand-tool {
      /* svg {
        width: 17px;
        height: 20px;
      } */
      /* border-top-right-radius: 40px; */
    }
  }
`);

export const MessageBar = withTheme(styled("div")`
  border-right: 1px solid var(--primary-color);
  padding-right: 32px;
  padding-left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    /* background-color: grey;
    padding: 5px;
    border-radius: 10px;
    svg {
      path {
        fill: white;
      }
    } */
  }
`);

export const ConnectorBar = withTheme(styled("div")`
  border-right: 1px solid var(--primary-color);
  padding-right: 32px;
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`);
