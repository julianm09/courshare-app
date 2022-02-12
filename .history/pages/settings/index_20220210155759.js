import * as React from "react";
import styled from "styled-components";

const BigCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 291px;
  font-family: General Sans;
`;

const HeadingCont = styled.div``;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-weight: 400;
`;
const ContentCont = styled.div``;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading2 = styled.p`
  font-size: 16px;
`;
export default function Settings() {
  return (
    <BigCont>
      <HeadingCont>
        <Heading>Settings</Heading>
      </HeadingCont>
      <ContentCont>
        <Cont>
          <Heading2>Appearance</Heading2>
        </Cont>
        <Cont></Cont>
        <Cont></Cont>
      </ContentCont>
    </BigCont>
  );
}
