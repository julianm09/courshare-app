import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Cont = styled.div``;

export default function PageNavigation({}) {
  return (
    <Cont>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Cont>
  );
}
