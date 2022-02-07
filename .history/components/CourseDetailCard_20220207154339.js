import styled from "styled-components";
import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import RegisterButton from "../components/RegisterButton";
import { yellow } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";

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
  font-weight: 450;
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
  font-weight: 450;
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
        <button style={{ border: "none", background: "none" }}>
          <CloseIcon />
        </button>
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
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[600],
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
          <Desc>{description}</Desc>
        </SecondCont>
        <ThirdCont>
          <Heading2>Skills</Heading2>
          <Desc>{skills}</Desc>
        </ThirdCont>
      </ContentCont>
    </BigCont>
  );
}
