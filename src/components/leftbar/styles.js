import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 9;
  transform: scale(1.2);
`;

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  height: 60px;
  width: 610px;
  margin-left: 20px;
  background: var(--white);
  border: 2px solid var(--primary-color);
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: var(--primary-color);
  div {
    div {
      height: 30px;
      width: 50px;
    }
    .move-tool {
      border-top-left-radius: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--gradient-green);
      border-right: 2px solid var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }
    .hand-tool {
      position: relative;
      height: 26px;
      width: 50px;
      border-bottom-left-radius: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 2px solid var(--primary-color);
    }
  }
`;

export const MessageBar = styled.div`
  border-right: 2px solid var(--primary-color);
  padding-right: 32px;
  padding-left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConnectorBar = styled.div`
  border-right: 2px solid var(--primary-color);
  padding-right: 32px;
  padding-left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Templates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 28px;
  gap: 16px;
`;
