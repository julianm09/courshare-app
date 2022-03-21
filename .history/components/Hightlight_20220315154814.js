import styled from "styled-components";

const Highlight = ({
  courseName = "UX Research",
  teachingSource = "National Taiwan University",
  difficulty = "Intermediate",
}) => {
  return (
    <Cont>
      <Text>Haven't started yet 🤞🍀</Text>
    </Cont>
  );
};

export default Highlight;

const Cont = styled.div`
  width: 123px;
  height: 19.5px;
  background: #ffdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 10.5px;
`;
