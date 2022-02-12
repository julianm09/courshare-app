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
  justify-content: space-between;
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

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function FilterBar({}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  tabs: {

    "& .MuiTabs-indicator": {
      display: "none"
      //backgroundColor: "orange"
    }
  
  }
  return (
    <BigCont>
      <TopCont>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className={classes.tabs}
        >
          <Tab value="One" label="Courses" />
          <Tab value="two" label="Curriculums" style={{ marginLeft: 30 }} />
        </Tabs>
      </TopCont>
      <BottomCont>
        <FilterBy>Filter by</FilterBy>

        <ButtonCont>
          <FilterDropdown />

          <FilterDropdown name="University" />

          <FilterDropdownSingle name="Level" />

          <FilterDropdownSingle />
        </ButtonCont>
      </BottomCont>
    </BigCont>
  );
}
