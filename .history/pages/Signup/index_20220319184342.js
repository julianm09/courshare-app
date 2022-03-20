import styled from "styled-components";

const Cont = styled.div`
  width: 519px;
  height: 528px;
  position: relative;
  background: #ffffff;
  /* button */
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 240px;
  top: 40px;
`;

const Name = styled.div`
  position: absolute;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #929292;
  top: 130px;
  left: 85px;
`;
const Text = styled.div`
  position: absolute;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
  top: 190px;
  left: 74px;
`;
const Input = styled.input`
  position: absolute;
  width: 378px;
  height: 52px;
  top: 215px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  left: 70px;
`;
const Data = styled.div`
  position: absolute;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
  top: 290px;
  left: 74px;
`;

const Inputpassword = styled.input`
  position: absolute;
  width: 378px;
  height: 52px;
  top: 319px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  left: 70px;
`;

const LoginBtn = styled.button`
  position: absolute;
  width: 378px;
  height: 52px;
  background: #ffecad;
  border-radius: 10px;
  border: 0.5px solid #ffecad;
  top: 420px;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #797979;
  left: 70px;
`;
const Signup = ({}) => {
  return (
    <Cont>
      <LogoImg src="/icons/clogo.png" />
      <Name>Sign up and build your skills with professional courses.</Name>

      <Text>Email</Text>
      <Input />
      <Data>Password</Data>
      <Inputpassword />
      <LoginBtn>Login</LoginBtn>
    </Cont>
  );
};

export default Signup;
