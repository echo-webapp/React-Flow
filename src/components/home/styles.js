import styled from "styled-components";
import { useTheme } from "@material-ui/styles";
import ReactFlow from "react-flow-renderer";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const ReactFlowContainer = styled(ReactFlow)`
  height: 100vh;
  background: var(--secondary-color);
  /* border-radius: 500px; */
  margin-right: 20px;
`;
