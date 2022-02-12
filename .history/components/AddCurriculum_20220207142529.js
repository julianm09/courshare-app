import styled from "styled-components";

const AddCurr = styled.button`
  width: 200x;
  height: 29px;
  background-color: ${(props) => props.background};
  border-radius: 10px;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
`;

const AddCurriculum = ({
  text = "Add to Curriculum",
  background = "rgba(255, 255, 255, 1)",
}) => {
  return <AddCurr background={background}>{text}</AddCurr>;
};

export default AddCurriculum;
