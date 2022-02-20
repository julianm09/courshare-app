import styled from "styled-components";
import { useState } from "react";
import CurriculumDropdown from "@/components/CurriculumDropdown";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import AddCurriculum from "./AddCurriculum";

const Cont = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 0 0 49px 0;
  cursor: pointer;
`;

const CourseCont = styled.div`
  display: flex;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 28px;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

const CourseImg = styled.img`
  width: 280px;
  height: 146px;
`;

const Title = styled.div`
  color: ${(props) => props.color};
`;

const Source = styled.div`
  font-size: 14px;
  color: #aaa;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Challenge = styled.div`
  font-size: 14px;
`;

const Selection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  setAddCurriculum,
  setViewCourse,
  handleAddCurriculum,
  handleViewCourse,
  course,
}) {
  const { theme, setTheme } = useTheme();
  return (
    <Cont>
      <CourseCont onClick={() => handleViewCourse(course)}>
        <CourseImg src={image} />
        <InfoCont>
          <Title color={comp_themes[theme].switch_text}>{courseName}</Title>
          <Source>{teachingSource}</Source>
          <Rating>
            <RatingStars defaultValue={ratingCount} />
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
        <Checkbox
          sx={{
            color: yellow[800],
            height: 0,
            width: 0,
            "&.Mui-checked": {
              color: yellow[600],
              height: 0,
              width: 0,
            },
          }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <div style={{margin: '0 0 0 25px'}}>
          <AddCurriculum handleAddCurriculum={handleAddCurriculum}/>
        </div>
      </Selection>
    </Cont>
  );
}
