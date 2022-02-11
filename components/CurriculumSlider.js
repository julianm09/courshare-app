import styled from "styled-components";
import { useState } from "react";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from "@mui/material";
import {purple} from '@mui/material/colors';


const Cont = styled.div`
    font-family: General Sans;
    font-style: normal;
    font-weight: normal;
`

const TitleCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2%;
`

const LeftCont = styled.div`
    display: flex;
    align-items: center;
`

const Avatar = styled.img`
    width: 77px;
    height: 77px;
    margin-right: 10%;
`

const AvatarText = styled.div`
    font-size: 26px;
    white-space: nowrap;
`

const RightCont = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
`

const ContentCont = styled.div`
    display: flex;
    justify-content: space-between;
`

const BoxCont = styled.div`
    width: 559px;
    height:188px;
    display:flex;
    box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
    border-radius: 10px;
`

const InfoCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left:3%;
    font-family: General Sans;
    font-style: normal;
    font-weight: normal;
    font-size:16px;
    white-space: nowrap;
`

const Img = styled.img`
    width: 355px;
    height: 188px;
`

const Title = styled.div`
    
`

const Source = styled.div`
    font-size: 14px;
    color: #aaa;
`
const Rating = styled.div`
    margin-bottom:22%;
`

const Challenge = styled.div`
    font-size: 12px;
`

export default function CurriculumSlider ({
    avasrc = "/avatar.png",
    avaText = "Juhee's UX/UI DesignCurriculum",
    favouriteCount = "4561",
    coursesrc1 = "/Testing1.png",
    courseName1 = "UX Research",
    teachingSource1 = "University of Toronto",
    ratingCount1 = 4.6,
    difficulty1 = " Beginner",
    coursesrc2 = "/Testing2.png",
    courseName2 = "User Perona",
    teachingSource2 = "National Taiwan University",
    ratingCount2 = 4.6,
    difficulty2 = " Beginner",
    coursesrc3 = "/Testing3.png",
    courseName3 = "3D CAD Fundamental",
    teachingSource3 = "National Taiwan University",
    ratingCount3 = 4.6,
    difficulty3 = " Intermediate"
}){
    return (
        <Cont>
            <TitleCont>
                <LeftCont>
                    <Avatar src={avasrc} />
                    <AvatarText>{avaText}</AvatarText>
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
                <BoxCont>
                    <Img src={coursesrc1} />
                    <InfoCont>
                    <Title>{courseName1}</Title>
                    <Source>{teachingSource1}</Source>
                    <Rating>
                        <RatingStars />
                        {ratingCount1}
                    </Rating>
                    <Challenge>
                        <DifficultyBar difficulty="beginner"/>
                        {difficulty1}
                    </Challenge>
                </InfoCont>
                </BoxCont>
                <BoxCont>
                    <Img src={coursesrc2} />
                    <InfoCont>
                    <Title>{courseName2}</Title>
                    <Source>{teachingSource2}</Source>
                    <Rating>
                        <RatingStars />
                        {ratingCount2}
                    </Rating>
                    <Challenge>
                        <DifficultyBar difficulty="beginner" />
                        {difficulty2}
                    </Challenge>
                </InfoCont>
                </BoxCont>
                <BoxCont>
                    <Img src={coursesrc3} />
                    <InfoCont>
                    <Title>{courseName3}</Title>
                    <Source>{teachingSource3}</Source>
                    <Rating>
                        <RatingStars />
                        {ratingCount3}
                    </Rating>
                    <Challenge>
                        <DifficultyBar difficulty="intermediate" />
                        {difficulty3}
                    </Challenge>
                </InfoCont>
                </BoxCont>
            </ContentCont>
        </Cont>
    )
}