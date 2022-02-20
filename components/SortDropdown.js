import styled from "styled-components";
import { useState } from "react";
import ax from "axios";
import CourseCardLV from "./CourseCardLV";

const SortDropdown = ({
  text = "Sort by",
  sort = [
    "A to Z",
    "Level (ascending)",
    "Level (descending)",
    "Ratings (ascending)",
    "Ratings (descending)",
  ],
  setSortDirection,
  setSortBy,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Cont>
      <Drowpdown onClick={() => setOpen(!open)}>
        {text}
        <Icon>
          {open ? (
            <img src="/icons/up-caret.svg" />
          ) : (
            <img src="/icons/down-caret.svg" />
          )}
        </Icon>
      </Drowpdown>
      {open ? (
        <DrowpdownBox>
          {sort.map((x) => (
            <Category onClick={() => setSortBy(x)}>{x}</Category>
          ))}
        </DrowpdownBox>
      ) : (
        <></>
      )}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Drowpdown = styled.div`
  height: 35px;
  width: 160px;
  max-width: 395px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 18px;
  font-family: General Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    margin-right: 0%;
  }
`;

const DrowpdownBox = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 100000;
  top: 52px;

  width: 160px;
  max-width: 395px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.div`
  font-family: General Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 0 18px;

  &:hover {
    background: #fef3d0;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SortDropdown;
