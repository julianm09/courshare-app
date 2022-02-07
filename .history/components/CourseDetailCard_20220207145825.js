import styled from "styled-components";
import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RegisterButton from "../components/RegisterButton";

const BigCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 956px;
  height: 776px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 20px;
  font-family: General Sans;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
`;
const XButton = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  color: #000;
  font-size: 22px;
`;
const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 46px 66px 66px 66px;
`;
const FristCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftCont = styled.div``;

const Img = styled.img`
  width: 245px;
  height: 245px;
  border-radius: 10px;
`;
const Heading1 = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`;

const GreyText = styled.p`
  color: #aaaaaa;
  font-size: 14px;
`;
const RightCont = styled.div`
  height: 245px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const RightSmallCont = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;
const SecondCont = styled.div`
  margin-top: 20px;
`;
const Heading2 = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const Desc = styled.p`
  font-size: 14px;
`;
const ThirdCont = styled.div``;

export default function CourseDetailCard({
  name = "3D  CAD Fundamental",
  school = "National Taiwan University",
  rating = 4.6,
  difficulty = "intermediate",
  description = "",
  skills = "",
}) {
  return (
    <BigCont>
      <ButtonCont>
        <XButton>x</XButton>
      </ButtonCont>
      <ContentCont>
        <FristCont>
          <LeftCont>
            <Img src="https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
          </LeftCont>
          <RightCont>
            <RightSmallCont>
              <Heading1>{name}</Heading1>
              <Checkbox
                sx={{
                  color: teal[800],
                  "&.Mui-checked": {
                    color: teal[600],
                  },
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </RightSmallCont>
            <RightSmallCont>
              <GreyText>{school}</GreyText>
            </RightSmallCont>
            <RightSmallCont>
              <Desc>{rating}</Desc>
              <Desc>{difficulty}</Desc>
            </RightSmallCont>
            <RightSmallCont>
              <RegisterButton />
            </RightSmallCont>
          </RightCont>
        </FristCont>
        <SecondCont>
          <Heading2>Description</Heading2>
          <Desc>
            There have many three-dimensional shape of the object in your brain
            that are wanted to share, but do not know how to express? How to
            "sketch" the three-dimensional image in your mind? 3D modeling
            technology can help us construct the most intuitive and
            understandable three-dimensional model. The use of floor plan
            interpret the three-dimensional object process-the most direct and
            effective expression of our ideas. We have designed many paradigms
            so that people can quickly understand the logic of using 3D CAD
            software Sketchup and drawing skills, from introduction to Advanced,
            and introduce SketchUp 3D modeling technologies. After completing
            "3D CAD Fundamental", it is no longer difficult to draw ideas that
            are beyond imagination with 3D modeling technology! The goal of this
            course is to construct a three-dimensional model, with the computer
            as the main teaching material, to enrich the fun paradigm and the
            complete drawing process. Step-by-step teach you how to use
            Sketchup's 3D modeling software technology. With the completion of
            "3D CAD Fundamental", you will be able to realize the 3D objects
            that exist in the imagination through 3D modeling!
          </Desc>
        </SecondCont>
        <ThirdCont>
          <Heading2>Skills</Heading2>
          <Desc>
            3d modeling • 3d lookup table • autodesk 3ds max • 3D Printing •
            Mechanical Engineering • sketchup • Scaling • Computer-aided design
            • Civil Engineering • mirror physical-science-and-engineering •
            mechanical-engineering
          </Desc>
        </ThirdCont>
      </ContentCont>
    </BigCont>
  );
}
