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

const Button = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc403;
  border-radius: 6px;
  color: white;
  margin: 0 17px 0  0;
`;

export default function PageButtons({items=424}) {

  const pages = items / 24

  

  return (
    <Cont>
        

    </Cont>
  );
}
