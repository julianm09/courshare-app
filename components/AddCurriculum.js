import styled from "styled-components";

const AddCurriculum = ({
  text = "Add to Curriculum",
  background = "rgba(255, 255, 255, 1)",
  handleAddCurriculum = () => {},
}) => {
  return (
    <AddCurr onClick={handleAddCurriculum} background={background}>
      {text}
    </AddCurr>
  );
};

export default AddCurriculum;

const AddCurr = styled.button`
  width: 200x;
  height: 29px;
  background-color: ${(props) => props.background};
  border-radius: 5px;
  border: 1px solid;
  border-color: #ffecad;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;

  &:hover {
    color: white;
    background-color: #ffc403;
    cursor: pointer;
  }
`;
