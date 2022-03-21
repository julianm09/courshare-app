import styled from "styled-components";
import RatingStars from "@/components/RatingStars";
import HighlightS from "@/components/HighlightsS";
import { useDrag, useDrop } from "react-dnd";

const CourseCard = ({
  courseName = "UX Research",
  teachingSource = "National Taiwan University",
  difficulty = "Intermediate",
  ratingCount,
  handleViewCourse,
  course,
}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type,
    item: {},
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  //console.log(isDragging);
  return (
    <CourseCont onClick={() => handleViewCourse(course)} ref={dragPreview}>
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
        <HighlightS />
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
  margin-bottom: 20px;
  width: 250px;
  height: 145px;
  padding: 12px;

  &:hover {
    box-shadow: 0px 2px 20px 10px rgba(185, 185, 185, 0.15);
  }
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProcessCont = styled.div`
  margin: 12px 0;
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
  margin: 0 0 8px 0;
`;

const Name = styled.div`
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #aaaaaa;
  margin: 0 0 8px 0;
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
