import styled from "styled-components";
import { useState } from "react";
import CurriculumDropdown from "@/components/CurriculumDropdown";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useTheme } from "@/utils/provider";

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 0 49px 0;
`;

const CourseCont = styled.div`
  display: flex;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
`;

const CourseImg = styled.img`
  width: 355px;
  height: 188px;
`;

const Title = styled.div`
  margin-bottom: 30%;
`;

const Source = styled.div`
  font-size: 14px;
  color: #aaa;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Challenge = styled.div``;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Break = styled.div`
  width: 3vw;
`;

export default function CourseCardLV({
  courseName = "3D CAD Fundamental",
  teachingSource = "National Taiwan University",
  ratingCount = 4.6,
  difficulty = " Intermediate",
  image,
}) {
  const { theme, setTheme } = useTheme();
  return (
    <Cont>
      <CourseCont>
        <CourseImg src={image} />
        <InfoCont>
          <Title color={comp_themes[theme].switch_text}>{courseName}</Title>
          <Source>{teachingSource}</Source>
          <Rating>
            <RatingStars />
            {ratingCount}
          </Rating>
          <Challenge>
            <DifficultyBar
              color={comp_themes[theme].switch_text}
              difficulty="intermediate"
            />
            {difficulty}
          </Challenge>
        </InfoCont>
      </CourseCont>
      <Selection>
        <CurriculumDropdown />
        <Break />
        <Checkbox
          sx={{
            color: purple[800],
            height: 30,
            "&.Mui-checked": {
              color: purple[600],
              height: 30,
            },
          }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </Selection>
    </Cont>
  );
}
