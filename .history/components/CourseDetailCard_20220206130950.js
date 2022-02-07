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
`;

const FristCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.image``;
const 
const SecondCont = styled.div``;
const ThirdCont = styled.div``;

export default function CourseDetailCard() {
  return (
    <BigCont>
      <FristCont></FristCont>
      <SecondCont></SecondCont>
      <ThirdCont></ThirdCont>
    </BigCont>
  );
}
