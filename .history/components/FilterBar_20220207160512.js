import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

const BigCont = styled.div`
  width: 971px;
  height: 210px;
`;
const TopCont = styled.div``;
const BottomCont = styled.div``;
export default function FilterBar({}) {
  return (
    <BigCont>
      <TopCont></TopCont>
      <BottomCont></BottomCont>
    </BigCont>
  );
}
