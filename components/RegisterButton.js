import styled from "styled-components";

const RegisterButton = ({
  text = "View on Coursera",
  data = "Starts Feb 2nd",
  background = "#FFC403",
  link
}) => {
  return (
    <RegisterBtn href={link} target="_blank" background={background}>
      <Header>{text}</Header>
    </RegisterBtn>
  );
};

export default RegisterButton;

const RegisterBtn = styled.a`
  width: 200px;
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
  font-size: 16px;
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
}
`;
