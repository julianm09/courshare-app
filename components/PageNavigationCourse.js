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
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    "&	.Mui-selected": {
      color: "#ffffff",
      backgroundColor: " #FFC403",
    },
  },
}));

export default function PageNavigationCourse({items=424, setCoursePage}) {

  const handleChange = (e, v) => {
    console.log(v);
    setCoursePage(v - 1)
  };
  
  const classes = useStyles();
  return (
    <Cont>
      <Pagination
        onChange={handleChange}
        count={Math.round(items / 9)}
        variant="outlined"
        shape="rounded"
        classes={{ ul: classes.ul }}
      />
    </Cont>
  );
}
