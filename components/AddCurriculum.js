import styled from "styled-components";
import { useState } from "react";
import AddedBadge from "./AddedBadge";

const AddCurriculum = ({
  course,
  text = "Add to Curriculum",
  background = "rgba(255, 255, 255, 1)",
  handleAddCurriculum = () => {},
  curriculums = [
    "UX/UI Design Course",
    "Web Development Course",
    "3D Modeling Course",
  ],
}) => {
  const [show, setShow] = useState(false);

  const handleDropdown = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  const addCurriculum = (e, course) => {
    e.stopPropagation();
    handleAddCurriculum(e, course);
    setShow(!show);
  };

  const addToCurriculum = (e, course) => {
    e.stopPropagation();

    setShow(!show);
  };

  return (
    <Cont>
      <AddCurr onClick={(e) => handleDropdown(e)} background={background}>
        {text}
      </AddCurr>

      {show ? (
        <CurriculumList>
          <CreateText onClick={(e) => addCurriculum(e, course)}>
            Create new curriculum
          </CreateText>
          <Break></Break>
          {curriculums.map((x) => (
            <Curriculums onClick={(e) => addToCurriculum(e, course)}>
              <div>{x}</div>
            </Curriculums>
          ))}
        </CurriculumList>
      ) : (
        <></>
      )}
    </Cont>
  );
};

export default AddCurriculum;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.74);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  cursor: pointer;
`;

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

const Cont = styled.div`
  z-index: 99999;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const CurriculumList = styled.div`
  width: 186px;
  background: white;
  border-radius: 10px;
  font-family: General Sans;
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  position: absolute;
  margin-top: 20px;
  padding: 5px 0;
  z-index: 99999;
`;

const CreateText = styled.div`
  font-size: 14px;
  padding: 3% 5%;
  cursor: pointer;

  &:hover {
    background: #fef3d0;
  }
`;

const Break = styled.div`
  width: 90%;
  border: 0.4px solid #cbcbcb;
  margin-left: 5%;
`;

const Curriculums = styled.div`
  font-size: 12px;
  padding: 3% 5%;
  cursor: pointer;
  &:hover {
    background: #fef3d0;
  }
`;
