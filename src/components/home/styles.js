import styled from "styled-components";
import { useTheme } from "@material-ui/styles";
import ReactFlow from "react-flow-renderer";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const ReactFlowContainer = styled(ReactFlow)`
  height: 100vh;
  background: var(--secondary-color);
`;

export const DotsGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  gap: 12px;
  div {
    width: 4px;
    height: 4px;
    background: rgba(206, 203, 220, 1);
    border-radius: 50%;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: var(--secondary-color);
  padding-top: 5px;
`;

export const FlowTitle = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  font-size: 18px;
  z-index: 10;
  color: #6b6a6a;
`;
