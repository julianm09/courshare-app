import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import RegisterButton from "../components/RegisterButton";
import { yellow } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import RatingStars from "./RatingStars";
import AddCurriculum from "./AddCurriculum";

export default function CourseDetailCard({
  name = "3D  CAD Fundamental",
  school = "National Taiwan University",
  rating = 4.6,
  difficulty = "intermediate",
  description = "",
  skills = "",
  setViewCourse,
  activeCourse
}) {
  const [value, setValue] = React.useState(4);

  return (
    <Overlay onClick={() => setViewCourse(false)}>
      <BigCont onClick={(e) => e.stopPropagation()}>
        <ButtonCont>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <CloseIcon onClick={() => setViewCourse(false)} />
          </button>
        </ButtonCont>
        <ContentCont>
          <FristCont>
            <LeftCont>
              <Img src={activeCourse["Image"] && activeCourse["Image"]} />
            </LeftCont>
            <RightCont>
              <RightSmallCont>
{/*                 <Heading1>{activeCourse["Course Name"]}</Heading1> */}
                <Checkbox
                  sx={{
                    color: yellow[800],
                    "&.Mui-checked": {
                      color: yellow[600],
                    },
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
                <AddCurriculum/>
              </RightSmallCont>
              <RightSmallCont>
                <GreyText>{activeCourse["University"]}</GreyText>
              </RightSmallCont>
              <RightSmallCont>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <RatingStars defaultValue={activeCourse["Course Rating"]}/>
                  <Desc>{activeCourse["Course Rating"]}</Desc>
                </div>
                <Desc>{activeCourse["Difficulty Level"]}</Desc>
              </RightSmallCont>
              <RightSmallCont>
                <RegisterButton link={activeCourse["Course URL"]}/>
              </RightSmallCont>
            </RightCont>
          </FristCont>
          <SecondCont>
            <Heading2>Description</Heading2>
            <Desc>{activeCourse["Course Description"].length > 500 ? activeCourse["Course Description"].slice(0, 500) + "..." : activeCourse["Course Description"]}</Desc>
          </SecondCont>
          <ThirdCont>
            <Heading2>Skills</Heading2>
            <Desc>{activeCourse["Skills"]}</Desc>
          </ThirdCont>
        </ContentCont>
      </BigCont>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.74);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const BigCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 956px;

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

const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 46px 66px 66px 66px;
`;
const FristCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 225px;
`;
const LeftCont = styled.div``;

const Img = styled.img`
height: 100%;
  border-radius: 10px;
`;
const Heading1 = styled.p`
  font-size: 24px;
  font-weight: 450;
`;

const GreyText = styled.p`
  color: #aaaaaa;
  font-size: 14px;
`;
const RightCont = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightSmallCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SecondCont = styled.div`
  margin: 20px 0;
`;
const Heading2 = styled.p`
  font-size: 20px;
  font-weight: 450;
`;
const Desc = styled.p`
  font-size: 14px;

`;
const ThirdCont = styled.div``;
