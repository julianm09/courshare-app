import * as React from "react";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import FilterDropdownSingle from "@/components/FilterDropdownSingle";

const BigCont = styled.div`
  width: 971px;
  height: 210px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const FilterBy = styled.p`
  font-family: General Sans;
  font-size: 18px;
  font-weight: 400;
`;
const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonWrap = styled.div`
  display: flex;

  justify-content: space-between;
`;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function FilterBar({}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BigCont>
      <TopCont>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="One" label="Courses" />
          <Tab value="two" label="Curriculums" />
        </Tabs>
      </TopCont>
      <BottomCont>
        <FilterBy>Filter by</FilterBy>

        <ButtonCont>
          <ButtonWrap>
            <FilterDropdown />
          </ButtonWrap>
          <ButtonWrap>
            <FilterDropdown name="University" />
          </ButtonWrap>
          <ButtonWrap>
            <FilterDropdownSingle name="Level" />
          </ButtonWrap>
          <ButtonWrap>
            <FilterDropdownSingle />
          </ButtonWrap>
        </ButtonCont>
      </BottomCont>
    </BigCont>
  );
}
