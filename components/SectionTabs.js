import * as React from "react";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const TopCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SectionTabs({
  value,
  setValue,
  one = "Courses",
  two = "Curriculum",
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TopCont>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="One" label={one} />
        <Tab value="two" label={two} style={{ marginLeft: 30 }} />
      </Tabs>
    </TopCont>
  );
}
