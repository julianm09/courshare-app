import styled from "styled-components";

const HighlightsL = ({
  Label = "Haven't started yet 🤞🍀",
  background = "#ffdcdc",
}) => {
  return (
    <Cont background={background}>
      <Text>{Label}</Text>
    </Cont>
  );
};

export default HighlightsL;

const Cont = styled.div`
  width: 188px;
  height: 30px;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 4px;
  border-radius: 4px;
`;

const Text = styled.p`
  font-size: 16px;
`;
