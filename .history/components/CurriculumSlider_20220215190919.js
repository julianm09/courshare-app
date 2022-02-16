import styled from "styled-components";
import { useState } from "react";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";

const Cont = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  width: auto;
  margin: 0 0 112px 0;
`;

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 32px 0;
`;

const LeftCont = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10%;
`;

const AvatarText = styled.div`
  font-size: 20px;
  white-space: nowrap;
  color: ${(props) => props.color};
`;

const RightCont = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const ContentCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxCont = styled.div`
  height: 124px;
  display: flex;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  margin: 0 45px 0 0;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 14px 30px;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
  width: 155px;
  padding: 10px 0;
`;

const Img = styled.img`
  width: 236px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 14px;
`;

const Source = styled.div`
  font-size: 12px;
  color: #aaa;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15%;
  font-size: 12px;
`;

const Challenge = styled.div`
  font-size: 12px;
`;

export default function CurriculumSlider({
  avasrc = "/avatar.png",
  avaText = "Juhee's UX/UI DesignCurriculum",
  favouriteCount = "4561",
  coursesrc1 = "/Testing1.png",
  courseName1 = "UX Research",
  teachingSource1 = "University of Toronto",
  ratingCount1 = 4.6,
  difficulty1 = " Beginner",
  courses,
}) {
  const { theme, setTheme } = useTheme();
  return (
    <Cont>
      <TitleCont>
        <LeftCont>
          <Avatar src={avasrc} />
          <AvatarText color={comp_themes[theme].switch_text}>
            {avaText}
          </AvatarText>
        </LeftCont>
        <RightCont>
          {favouriteCount}
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
        </RightCont>
      </TitleCont>
      <ContentCont>
        {courses.map((x) => (
          <BoxCont>
            <Img src={x["Image"]} />
            <InfoCont>
              <Title>{x["Course Name"]}</Title>
              <Source>{x["University"]}</Source>
              <Rating>
                <RatingStars />
                {x["Course Rating"]}
              </Rating>
              <Challenge>
                <DifficultyBar difficulty="beginner" />
                {x["Difficulty Level"]}
              </Challenge>
            </InfoCont>
          </BoxCont>
        ))}
      </ContentCont>
    </Cont>
  );
}
