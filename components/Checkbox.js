import styled from "styled-components";
import { useState } from "react";

export default function Checkbox({ handleSelect, x, setSelected, selected }) {
  return (
    <CheckboxUI selected={selected && selected.includes(x)} onClick={() => handleSelect(x)} />
  );
}

const CheckboxUI = styled.div`
  margin: 0 16px 0 0;
  box-sizing: border-box;
  border-radius: 5px;
  min-width: 20px;
  min-height: 20px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#ffc403" : "#fffff")};
  border: ${(props) =>
    props.selected ? "1px solid #ffc403" : "1px solid #000000"};
`;
