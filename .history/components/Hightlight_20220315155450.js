import styled from "styled-components";

const Highlight = (
  { Label = "Haven't started yet 🤞🍀" },
  background = "#ffdcdc"
) => {
  return (
    <Cont background={background}>
      <Text>{Label}</Text>
    </Cont>
  );
};

export default Highlight;

const Cont = styled.div`
  width: 123px;
  height: 19.5px;
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.p`
  font-size: 10.5px;
`;
