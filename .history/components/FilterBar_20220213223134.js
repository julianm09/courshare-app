import * as React from "react";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import FilterDropdownSingle from "@/components/FilterDropdownSingle";
import { makeStyles } from "@mui/styles";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

const BigCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 79px 0 74px 0;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin: 0 0 71px 0;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;
const FilterBy = styled.p`
  font-family: General Sans;
  font-size: 16px;
  font-weight: 400;
`;
const BottomCont = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Space = styled.div`
  width: 17px;
  height: 22px;
`;

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "#FFC403",
    height: "10px",
    top: "45px",
  },
  textColor: {
    color: "#FFC403",
  },
}));

export default function FilterBar({ value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <BigCont>
      <TopCont>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#FFC403"
          aria-label="secondary tabs example"
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab classes={{ tabs: classes.tabs }} value="One" label="Courses" />
          <Tab value="Two" label="Curriculums" style={{ marginLeft: 30 }} />
        </Tabs>
        <Space />
        <SearchBar />
        <SortDropdown />
      </TopCont>
      <BottomCont>
        <FilterBy>Filter by</FilterBy>

        <ButtonCont>
          <FilterDropdown name="University" />
          <Space />

          <FilterDropdownSingle name="Level" />
          <Space />

          <FilterDropdownSingle />
        </ButtonCont>
      </BottomCont>
    </BigCont>
  );
}
