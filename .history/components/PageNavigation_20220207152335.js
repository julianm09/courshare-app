import styled from "styled-components";
import { useState } from "react";

const Cont = styled.div``;

export default function PageNavigation({}) {
  return (
    <Cont>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Cont>
  );
}
