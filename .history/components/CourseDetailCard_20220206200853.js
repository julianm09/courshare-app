import styled from "styled-components";
import { useState } from "react";

const BigCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 956px;
  height: 776px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 20px;
  justify-content: space-between;

  padding: 86px;
`;

const FristCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.image``;
const SecondCont = styled.div``;
const Heading2 = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const Desc = styled.p`
  font-size: 14px;
`;
const ThirdCont = styled.div``;

export default function CourseDetailCard() {
  return (
    <BigCont>
      <FristCont>asjdf</FristCont>
      <SecondCont>
        <Heading2>Description</Heading2>
        <Desc>
          There have many three-dimensional shape of the object in your brain
          that are wanted to share, but do not know how to express? How to
          "sketch" the three-dimensional image in your mind? 3D modeling
          technology can help us construct the most intuitive and understandable
          three-dimensional model. The use of floor plan interpret the
          three-dimensional object process-the most direct and effective
          expression of our ideas. We have designed many paradigms so that
          people can quickly understand the logic of using 3D CAD software
          Sketchup and drawing skills, from introduction to Advanced, and
          introduce SketchUp 3D modeling technologies. After completing "3D CAD
          Fundamental", it is no longer difficult to draw ideas that are beyond
          imagination with 3D modeling technology! The goal of this course is to
          construct a three-dimensional model, with the computer as the main
          teaching material, to enrich the fun paradigm and the complete drawing
          process. Step-by-step teach you how to use Sketchup's 3D modeling
          software technology. With the completion of "3D CAD Fundamental", you
          will be able to realize the 3D objects that exist in the imagination
          through 3D modeling!
        </Desc>
      </SecondCont>
      <ThirdCont>a;lsdfja</ThirdCont>
    </BigCont>
  );
}
