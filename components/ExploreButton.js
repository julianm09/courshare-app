import styled from "styled-components";

const Cont = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const ExploreBtn = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${(props) => props.background};
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const ExploreButton = ({ onClick, text = "Explore", background = "#4d328a" }) => {
  return (
    <Cont>
      <ExploreBtn onClick={onClick} background={background}>{text}</ExploreBtn>
    </Cont>
  );
};

export default ExploreButton;
