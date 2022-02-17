import styled from "styled-components";

const Cont = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const AddedBtn = styled.button`
  width: 253px;
  height: 79px;
  background-color: ${(props) => props.background};
  font-size: 16px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: General Sans;
  font-style: normal;
  font-weight: 400;
  filter: drop-shadow(0px 2px 8px rgba(185, 185, 185, 0.52));
`;

const AddedBadge = ({
  text = "Added to Curriculum",
  background = "#ffecad",
}) => {
  return <AddedBtn background={background}>{text}</AddedBtn>;
};

export default AddedBadge;
