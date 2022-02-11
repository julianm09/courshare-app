import * as React from "react";
import styled from "styled-components";

const BigCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeadingCont = styled.div``;
const Heading = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
export default function Settings() {
  return (
    <BigCont>
      <HeadingCont>
        <Heading>Settings</Heading>
      </HeadingCont>
    </BigCont>
  );
}
