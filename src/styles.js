import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #8ae48a;
  gap: 10px;
  padding: 3px;
  div {
    svg {
      vertical-align: middle;
    }
  }
`;

export const Title = styled.section`
  font-size: 14px;
`;

export const Messages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 50px;
  position: relative;
  div {
    padding: 10px;
    input {
      width: 100%;
    }
  }
`;

export const MessageSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 5px;
  width: 30px;
  height: 30px;
  svg {
    vertical-align: middle;
    font-size: 40px;
  }
`;
