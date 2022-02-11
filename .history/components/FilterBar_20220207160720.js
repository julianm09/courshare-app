import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

const BigCont = styled.div`
  width: 971px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: space-betweeon;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const FilterBy = styled.p`
  font-family: General Sans;
`;
const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonCont = styled.div``;
export default function FilterBar({}) {
  return (
    <BigCont>
      <TopCont></TopCont>
      <BottomCont>
        <ButtonCont></ButtonCont>
        <ButtonCont></ButtonCont>
        <ButtonCont></ButtonCont>
        <ButtonCont></ButtonCont>
      </BottomCont>
    </BigCont>
  );
}
