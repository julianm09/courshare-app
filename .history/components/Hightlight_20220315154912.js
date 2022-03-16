import styled from "styled-components";

const Highlight = ({ Label = "Haven't started yet 🤞🍀" }) => {
  return (
    <Cont>
      <Text>{Label}</Text>
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
