import styled from "styled-components";
import { withTheme } from "@material-ui/core";

export const MainContainer = withTheme(styled("div")`
  display: flex;
  align-items: center;
  height: 100vh;
`);

export const Container = withTheme(styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  height: 610px;
  width: 120px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.color.light};
`);

export const ToolBar = withTheme(styled("div")`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  div {
    div {
      padding: 20px;
    }
    .move-tool {
      border-top-left-radius: 40px;
      background-color: ${({ theme }) => theme.color.dark};
    }
    .hand-tool {
      svg {
        width: 17px;
        height: 20px;
      }
      border-top-right-radius: 40px;
    }
  }
`);

export const MessageBar = withTheme(styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-top: 32px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .icon {
    background-color: grey;
    padding: 5px;
    border-radius: 10px;
    svg {
      path {
        fill: white;
      }
    }
  }
`);

export const ConnectorBar = withTheme(styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-top: 32px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`);
