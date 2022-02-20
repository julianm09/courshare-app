import * as React from "react";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useTheme } from "@/utils/provider";
import FilterDropdown from "@/components/FilterDropdown";
import FilterDropdownSingle from "@/components/FilterDropdownSingle";
import { makeStyles } from "@mui/styles";
import SearchBar from "./SearchBar";
import { comp_themes } from "@/utils/variables";

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
  justify-content: space-between;
  color: ${props => props.color};
  font-family: General Sans;
  align-items: center;
  margin: 0 0 71px 0;
  min-height: 50px;
  width: 90%;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const FilterBy = styled.p`
  font-family: General Sans;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color};
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

const useStyles = makeStyles(() => ({
  indicator: {
    backgroundColor: "#FFC403",
    height: "10px",
    top: "45px",
  },
  textColor: {
    color: "#FFC403",
  },
}));

export default function FilterBar({
  rating,
  setRating,
  level,
  setLevel,
  value,
  setValue,
  handleSearch,
  setUniversity,
  university,
  curriculumCategory,
  setCurriculumCategory,
  setSearchCourse,
  searchCourse,
  setSearchCurriculum,
  searchCurriculum,
  display,
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  const { theme, setTheme } = useTheme();

  const [showFilter, setShowFilter] = useState("");

  return (
    <BigCont>
      <TopCont color={theme === "dark" ? "white" : "black"}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="secondary tabs example"
          TabIndicatorProps={{ className: classes.indicator }}
        >
          <Tab classes={{ tabs: classes.tabs }} value="One" label="Courses" />
          <Tab value="Two" label="Curriculums" style={{ marginLeft: 30, fontFamily }} />
        </Tabs>
        <Space />
        <SearchBar
          handleSearch={handleSearch}
          value={display === "One" ? searchCourse : searchCurriculum}
        />
      </TopCont>
      <BottomCont>
        <FilterBy color={comp_themes[theme].switch_text}>Filter by</FilterBy>

        <ButtonCont>
          {value == "One" ? (
            <>
              <FilterDropdown
                name="University"
                selected={university}
                setSelected={setUniversity}
                show={showFilter == "University"}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
              />
              <Space />

              <FilterDropdownSingle
                name="Level"
                selected={level}
                setSelected={setLevel}
                categories={["Beginner", "Intermediate", "Advanced"]}
                show={showFilter == "Level"}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
              />
              <Space />

              <FilterDropdownSingle
                name="Rating"
                selected={rating}
                setSelected={setRating}
                show={showFilter == "Rating"}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
              />
            </>
          ) : (
            <>
              <FilterDropdown
                name="Category"
                selected={curriculumCategory}
                setSelected={setCurriculumCategory}
                categories={["webdev", "communication", "math", "business"]}
              />
              <Space />
            </>
          )}
        </ButtonCont>
      </BottomCont>
    </BigCont>
  );
}
