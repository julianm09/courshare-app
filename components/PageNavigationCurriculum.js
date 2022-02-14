import * as React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      border: "1px solid #FFC403",
    },
    "&	.Mui-selected": {
      color: "#ffffff",
      backgroundColor: " #FFC403",
    },
  },
}));

export default function PageNavigationCurriculum({items=5, setCurriculumPage, curriculumPage, getCurriculums}) {

  const handleChange = (e, v) => {
    console.log(v);
    setCurriculumPage(v - 1)
  };

  React.useEffect(() => {
    getCurriculums();
  },[curriculumPage])
  
  const classes = useStyles();
  return (
    <Cont>
      <Pagination
        onChange={handleChange}
        count={Math.round(items / 3)}
        variant="outlined"
        shape="rounded"
        classes={{ ul: classes.ul }}
      />
    </Cont>
  )
}
