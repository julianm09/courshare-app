import styled from "styled-components";

const HighlightsS = ({
  Label = "Haven't started yet 🤞🍀",
  background = "#ffdcdc",
}) => {
  return (
    <Cont background={background}>
      <Text>{Label}</Text>
    </Cont>
  );
};

export default HighlightsS;

const Cont = styled.div`
  width: 123px;
  height: 19.5px;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 2px;
  border-radius: 4px;
`;

const Text = styled.p`
  font-size: 10.5px;
`;
