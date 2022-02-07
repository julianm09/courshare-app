import styled from "styled-components";
import { useState } from "react";

const CheckboxUI = styled.div`
  margin: 0 16px 0 0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#ffc403" : "#fffff")};
  border: ${(props) =>
    props.selected ? "1px solid #ffc403" : "1px solid #000000"};
`;

export default function CourseDetailCard() {
  return (
    <CheckboxUI
      selected={selected.includes(x)}
      onClick={() => handleSelect(x)}
    />
  );
}
