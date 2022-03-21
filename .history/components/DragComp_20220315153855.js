import styled from "styled-components";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import DifficultyBar from "@/components/DifficultyBar";
import RatingStars from "@/components/RatingStars";
import AddCurriculum from "@/components/AddCurriculum";

const CourseCard = ({
  courseName = "UX Research",
  teachingSource = "National Taiwan University",
  difficulty = "Intermediate",
  ratingCount,
  image,
  handleAddCurriculum,
  handleViewCourse,
  course,
  handleSaveCourse,
  savedCourses,
}) => {
  return (
    <CourseCont onClick={() => handleViewCourse(course)}>
      <InfoCont>
        <Header>{courseName}</Header>
        <Name>{teachingSource}</Name>
        <Row>
          <RatingBar>
            <RatingStars defaultValue={ratingCount} />
            {ratingCount}
          </RatingBar>
          <SmallBar>
            <Text>{difficulty}</Text>
          </SmallBar>
        </Row>
      </InfoCont>
      <ProcessCont>
        <Date>May 14, 2022</Date>
        <Date>May 14, 2022</Date>
      </ProcessCont>
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
  cursor: pointer;
  transition: 0.2s ease;
  width: 250px;
  height: 145px;
  &:hover {
    box-shadow: 0px 2px 20px 10px rgba(255, 196, 3, 0.15);
  }
`;

const InfoCont = styled.div`
  margin:12px;
  height:60%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProcessCont = styled.div`
  margin:12px;
  height:40%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 6px 0;
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
`;

const AddBar = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Date = styled.p`
  font-size: 10px;
`;
