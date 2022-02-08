import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const Cont = styled.div``;

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#FFC403",
    },
  },
}));
export default function PageNavigation({}) {
  return (
    <Cont>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        classes={{ ul: classes.ul }}
      />
    </Cont>
  );
}
