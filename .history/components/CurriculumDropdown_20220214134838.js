import styled from "styled-components";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Cont = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const CurriculumList = styled.div`
  width: 186px;
  height: 120px;
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
  padding: 10px 0;
`;

const CreateText = styled.div`
  font-size: 14px;
  margin-left: 5%;
  margin-top: 3%;
`;

const Break = styled.div`
  width: 80%;
  border: 0.4px solid #cbcbcb;
  margin-left: 5%;
`;

const Curriculums = styled.div`
  font-size: 12px;
  margin-left: 5%;
`;

export default function CurriculumDropdown({
  curriculums = [
    "UX/UI Design Course",
    "Web Development Course",
    "3D Modeling Course",
  ],
}) {
  const [show, setShow] = useState(false);

  return (
    <Cont>
      <MoreVertIcon onClick={() => setShow(!show)} />

      {show ? (
        <CurriculumList>
          <CreateText>Create new curriculum</CreateText>
          <Break></Break>
          {curriculums.map((x) => (
            <Curriculums>
              <div>{x}</div>
            </Curriculums>
          ))}
        </CurriculumList>
      ) : (
        <></>
      )}
    </Cont>
  );
}
