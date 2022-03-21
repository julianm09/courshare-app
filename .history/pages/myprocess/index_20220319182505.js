import styled from "styled-components";
import ax from "axios";
import { useEffect, useState } from "react";
import QuestionButton from "@/components/QuestionBotton";
import HighlightsL from "@/components/HighlightsL";
import DragComp from "@/components/DragComp";
import DropZone from "@/components/DropZone";

export default function MyProcess({ username = "Julian", curriculum = "UX" }) {
  return (
    <Cont>
      <TopCont>
        <Greeting>
          Welcome to <br></br> {username}'s {curriculum} Curriculum👋
        </Greeting>
        <QuestionButton />
      </TopCont>
      <BtCot>
        <SubHeading>
          <Bar></Bar>
          <SubText>Curriculum Process ✔️</SubText>
        </SubHeading>
        <DragCont>
          <ProcessCont>
            <HighlightsL />
            <DropZone>
              <DragComp />
              <DragComp />
              <DragComp />
              <DragComp />
              <DragComp />
              <DragComp />
            </DropZone>
          </ProcessCont>
          <ProcessCont>
            <HighlightsL Label="Processing 💪 ✨" background="#FFEBCC" />
            <DropZone></DropZone>
          </ProcessCont>
          <ProcessCont>
            <HighlightsL Label="Completed 🙌 ✅ " background="#C8F8CD" />
            <DropZone></DropZone>
          </ProcessCont>
        </DragCont>
        <ChatCont></ChatCont>
      </BtCot>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
  }
`;
const TopCont = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 92px;
`;
const BtCot = styled.div`
  width: 70vw;
  display: flex;

  flex-direction: column;
`;
const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 62px;
`;
const DragCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: space-around;
`;
const Bar = styled.div`
  width: 5px;
  height: 25px;
  background: #ffc403;
  margin-right: 20px;
`;

const SubText = styled.div`
  font-size: 18px;
`;
const ChatCont = styled.div``;

const ProcessCont = styled.div``;

const Greeting = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 74px;
  color: #000000;
  margin: 95px 0 0 0;
  width: 80%;
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  height: 0.5;
  width: 80%;
  background: #d8d8d8;
`;
const GridView = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  width: 80%;
  grid-gap: 53px;

  @media (max-width: 1400px) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 2fr;
    width: 90%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 2fr;
  }
`;
