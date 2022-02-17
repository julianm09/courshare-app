import styled from "styled-components";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import DifficultyBar from "@/components/DifficultyBar";
import RatingStars from "@/components/RatingStars";
import AddCurriculum from "@/components/AddCurriculum";

const CourseCard = ({
  courseName,
  teachingSource = "National Taiwan University",
  difficulty = "Intermediate",
  ratingCount,
  image,
}) => {
  return (
    <CourseCont>
      <Redimg src={image} />

      <InfoCont>
        <Header>{courseName}</Header>
        <Name>{teachingSource}</Name>

        {/*       <LeftSmallBox>
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
      </LeftSmallBox> */}

        <RatingBar>
          <RatingStars />
          {ratingCount}
        </RatingBar>

        <Row>
          <SmallBar>
            <Text>{difficulty}</Text>
          </SmallBar>
          <AddBar>
            <AddCurriculum />
          </AddBar>
        </Row>
      </InfoCont>
    </CourseCont>
  );
};

export default CourseCard;

const CourseCont = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  just0fy-content: center;
`;

const InfoCont = styled.div`
  margin: 24px;
`;

const Redimg = styled.img`
  position: relative;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Header = styled.div`
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 12px 0;
`;

const Name = styled.div`
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #aaaaaa;
  margin: 0 0 12px 0;
`;
const LeftSmallBox = styled.div`
  position: relative;
`;

const SmallBar = styled.div`
  display: flex;
`;

const Text = styled.div`
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 42px 0;
`;

const AddBar = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
