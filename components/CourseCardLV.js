import styled from "styled-components";
import { useState } from "react";
import CurriculumDropdown from "@/components/CurriculumDropdown";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";

export default function CourseCardLV({
  courseName = "3D CAD Fundamental",
  teachingSource = "National Taiwan University",
  ratingCount = 4.6,
  difficulty = " Intermediate",
  image,
}) {
  return (
    <Cont>
      <CourseCont>
        <CourseImg src={image} />
        <InfoCont>
          <Title>{courseName}</Title>
          <Details>
            <Source>{teachingSource}</Source>
            <Rating>
              <RatingStars />
              {ratingCount}
            </Rating>
            <Challenge>
              <DifficultyBar difficulty="intermediate" />
              {difficulty}
            </Challenge>
          </Details>
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

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 49px 0;
`;

const CourseCont = styled.div`
  display: flex;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

const CourseImg = styled.img`
  width: 355px;
  margin: 0 28px 0 0;
`;

const Title = styled.div``;

const Source = styled.div`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 22px 0;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 22px 0;
`;

const Challenge = styled.div`
  margin: 0 0 10px 0;
`;

const Selection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
`;

const Break = styled.div`
  width: 77px;
`;

const Details = styled.div``;
