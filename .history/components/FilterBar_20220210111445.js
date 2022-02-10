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

render: function() {

  var styles = {
    default_tab:{
      color: Colors.grey500,
      backgroundColor: Colors.grey50,
      fontWeight: 400,
    },
    active_tab:{
      color: Colors.deepOrange700,
    }
  }

  styles.tab = []
  styles.tab[0] = styles.default_tab;
  styles.tab[1] = styles.default_tab;
  styles.tab[2] = styles.default_tab;
  styles.tab[this.state.slideIndex] = objectAssign({},   styles.tab[this.state.slideIndex], styles.active_tab);

export default function FilterBar({}) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BigCont>
      <TopCont>
        <Tabs
          style={this.getStyles().tabs}
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
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
