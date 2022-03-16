import styled from "styled-components";

const Highlight = ({
  courseName = "UX Research",
  teachingSource = "National Taiwan University",
  difficulty = "Intermediate",
}) => {
  return <CourseCont onClick={() => handleViewCourse(course)}></CourseCont>;
};

export default Highlight;
