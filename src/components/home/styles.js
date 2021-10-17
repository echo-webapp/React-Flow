import styled from "styled-components";
import { useTheme } from "@material-ui/styles";
import ReactFlow from "react-flow-renderer";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
`;

export const ReactFlowContainer = styled(ReactFlow)`
  height: 100vh;
  background: var(--secondary-color);
`;
