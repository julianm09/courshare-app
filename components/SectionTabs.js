import * as React from "react";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import FilterDropdownSingle from "@/components/FilterDropdownSingle";
import { makeStyles } from "@mui/styles";
import SearchBar from "./SearchBar";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";

export default function FilterBar({
  display,
  value,
  setValue,
  handleSearch,
  one,
  two,
  three,
  useSearch,
  setSearchCourse,
  searchCourse,
  setSearchCurriculum,
  searchCurriculum,
  searchMyCurriculum,
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const { theme, setTheme } = useTheme();
  return (
    <BigCont>
      <TopCont>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="secondary tabs example"
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab classes={{ tabs: classes.tabs }} value="One" label={one} />
          <Tab value="Two" label={two} style={{ marginLeft: 30 }} />
          <Tab value="Three" label={three} style={{ marginLeft: 30 }} />
        </Tabs>
      </TopCont>
      <BottomCont>
        <Header color={comp_themes[theme].switch_text}>
          {display == "One" ? one : display === "Two" ? two : three}
        </Header>
        <SearchBar
          handleSearch={handleSearch}
          useSearch={useSearch}
          value={
            display === "One"
              ? searchCourse
              : display === "Two"
              ? searchCurriculum
              : searchMyCurriculum
          }
        />
      </BottomCont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 79px 0 74px 0;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 71px 0;
  height: 50px;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  color: ${(props) => props.color};

  @media (max-width: 1000px) {
    margin: 0 0 20px 0;
  }
`;
const BottomCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
