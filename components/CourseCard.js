import styled from "styled-components";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import DifficultyBar from "@/components/DifficultyBar";
import RatingStars from '@/components/RatingStars';
import AddCurriculum from '@/components/AddCurriculum';


const CourseCard = styled.div`
width: 315px;
height: 380px;
background-color: #FFFFFF;
box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
border-radius: 20px;
`

const Redimg = styled.img`
position:relative;
`

const Header = styled.div`
position:relative;
font-family: General Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
top:30px;
left:20px;
`

const Name = styled.div`
position:relative;
font-family: General Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
color: #AAAAAA;
top:55px;
left:19px


`
const LeftSmallBox = styled.div`
position:relative;
left:260px;
top:-20px
`

const SmallBar = styled.div`
position:relative;
left:20px;
top:80px;
`

const Text = styled.div`
position:relative;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #000000;
left:45px;
top:65px;

`



const RatingBar = styled.div`
position:relative;
left:18px;
top:-10px;
`

const AddBar = styled.div`
position:relative;
left:175px;
top:20px;
`



const CourseCd = ({
    text="3D CAD Fundamental",
    data="National Taiwan University",
    inform="Intermediate",
    
    }) =>{
        return (
            <CourseCard> 
            <Redimg src="/icons/redcard.png"/>
            <Header>{text}</Header>
            <Name>{data}</Name>

           <LeftSmallBox>
            <Checkbox
                sx={{
                  color: purple[800],
                  "&.Mui-checked": {
                    color: purple[600],
                  },
                }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              </LeftSmallBox>
                <SmallBar><DifficultyBar/></SmallBar>
                <Text>{inform}</Text>
                <RatingBar><RatingStars/></RatingBar>
                <AddBar><AddCurriculum/></AddBar>

            
            </CourseCard>
    
            
        )
    }


export default CourseCd;