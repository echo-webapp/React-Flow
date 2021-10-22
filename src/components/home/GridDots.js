import React, { memo } from "react";
import * as S from "./styles";

const arr = [...Array(10000)];

const GridDots = memo(() => {
  return (
    <S.DotsGrid>
      {arr.map((item) => {
        return <div></div>;
      })}
    </S.DotsGrid>
  );
});

export default GridDots;
