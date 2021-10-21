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
  height: 60px;
  margin-left: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .right {
    &:hover {
      cursor: pointer;
      &::before {
        content: "Delete flow";
        position: absolute;
        text-align: center;
        width: 60px;
        top: -35px;
        right: 10px;
        font-size: 10px;
        transform: translateX(30%);
        background: rgba(32, 40, 97, 1);
        color: white;
        padding: 4px 8px;
        border-radius: 49.2308px;
      }
    }
  }
  .left {
    &:hover {
      cursor: pointer;
      &::before {
        content: "Save flow";
        position: absolute;
        text-align: center;
        width: 60px;
        top: -35px;
        left: 10px;
        font-size: 10px;
        transform: translateX(-30%);
        background: rgba(32, 40, 97, 1);
        color: white;
        padding: 4px 8px;
        border-radius: 49.2308px;
      }
    }
  }
`;

export const MessageBar = styled.div`
  border: 2px solid var(--primary-color);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: var(--white);
  border-radius: 20px;
  padding-right: 48px;
  padding-left: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border: 2px solid var(--primary-color);
  border-left: ${(props) =>
    props.side == "left" ? "2px solid var(--primary-color)" : "none"};
  border-right: ${(props) =>
    props.side == "right" ? "2px solid var(--primary-color)" : "none"};
  transform: ${(props) =>
    props.side == "left" ? "translateX(50%)" : "translateX(-50%)"};
  border-radius: 20px;
  padding-right: 30px;
  padding-left: 30px;
  z-index: 2;
  .icon {
    transform: ${(props) =>
      props.side == "left" ? "translateX(-120%)" : "translateX(120%)"};
  }
`;
