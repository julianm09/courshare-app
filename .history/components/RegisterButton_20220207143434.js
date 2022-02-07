import styled from "styled-components";

const RegisterBtn = styled.button`
  width: 166px;
  height: 57px;
  background-color: ${(props) => props.background};
  color: #000000;
  filter: drop-shadow(0px 2px 8px rgba(185, 185, 185, 0.52));
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #000000;
margin-left: auto;
margin-right: auto;

}
`;

const RegisterButton = ({
  text = "View Course",
  data = "Starts Feb 2nd",
  background = "#FFC403",
}) => {
  return (
    <RegisterBtn background={background}>
      <Header>{text}</Header>
      <Text>{data}</Text>
    </RegisterBtn>
  );
};

export default RegisterButton;
