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
import SortDropdown from "./SortDropdown";

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
  searchCourse,
  searchCurriculum,
  display,
  setSortBy,
  setSortDirection,
  sort,
  useSearch,
  universities,
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
          <Tab value="Two" label="Curriculums" style={{ marginLeft: 30 }} />
        </Tabs>
        <Space />
        <SearchBar
          useSearch={useSearch}
          handleSearch={handleSearch}
          value={display === "One" ? searchCourse : searchCurriculum}
        />
      </TopCont>
      <BottomCont>
        <FilterBy color={comp_themes[theme].switch_text}>Filter by</FilterBy>

        <ButtonCont>
          {value == "One" ? (
            <>
              <FilterCont>
                <FilterDropdown
                  name="University"
                  selected={university}
                  setSelected={setUniversity}
                  show={showFilter == "University"}
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  columns={4}
                  categories={[
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                  ]}
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
                <Space />
              </FilterCont>

              <SortDropdown
                setSortBy={setSortBy}
                setSortDirection={setSortDirection}
                sort={sort}
              />
            </>
          ) : (
            <>
              <FilterDropdown
                name="Category"
                selected={curriculumCategory}
                setSelected={setCurriculumCategory}
                categories={[
                  "Design",
                  "Accounting",
                  "Data Analysis",
                  "Management",
                  "Logistics",
                  "Business Analysis",
                  "Programming",
                  "Web Development",
                  "Sales",
                  "Data Management",
                  "Communication",
                  "Databases",
                ]}
                show={showFilter == "Category"}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
              />
              <Space />

              <SortDropdown
                setSortBy={setSortBy}
                setSortDirection={setSortDirection}
                sort={sort}
              />
            </>
          )}
        </ButtonCont>
      </BottomCont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 79px 0 74px 0;
  width: 80%;

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 2fr;
    width: 90%;
  }
`;

const TopCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.color};
  font-family: General Sans;
  align-items: center;
  margin: 0 0 71px 0;
  min-height: 50px;

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
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

const FilterCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Space = styled.div`
  width: 17px;
  height: 22px;
`;
