import styled from "styled-components";
import { useState } from "react";

const BigCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 956px;
  height: 776px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 20px;
  justify-content: space-between;

  padding: 86px;
`;

const FristCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.image``;
const SecondCont = styled.div``;
const Heading2 = styled.p`
  font-size: 20px;
  font-weight: 800;
`;
const Desc = styled.p`
  font-size: 14px;
`;
const ThirdCont = styled.div``;

export default function CourseDetailCard() {
  return (
    <BigCont>
      <FristCont>asjdf</FristCont>
      <SecondCont>
        <Heading2>Description</Heading2>
        <Desc>Description</Desc>
      </SecondCont>
      <ThirdCont>a;lsdfja</ThirdCont>
    </BigCont>
  );
}
