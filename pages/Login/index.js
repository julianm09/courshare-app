import styled from "styled-components";

const Cont = styled.div`
width: 378px;
height: 586px;          
position: relative;            
top: 0;            
bottom: 0;            
left: 0;            
right: 0;            
margin: auto;    
`

const LogoImg = styled.img`
position:absolute;
left:170px;
`

const Header = styled.div`
position:absolute;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
color: #000000;
top:80px;
left:140px;
`
const Name = styled.div`
position: absolute;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #929292;
top:130px;
left:13px;

`
const Text = styled.div`
position:absolute;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #5E5E5E;
top:190px;

`
const Input = styled.input`
position: absolute;
width: 378px;
height: 52px;
top:215px;
background: #FCFCFC;
border: 0.5px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const Data = styled.div`
position:absolute;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #5E5E5E;
top:290px;
`

const Inputpassword = styled.input`
position: absolute;
width: 378px;
height: 52px;
top:319px;
background: #FCFCFC;
border: 0.5px solid #B8B8B8;
box-sizing: border-box;
border-radius: 10px;
`

const LoginBtn = styled.button`
position: absolute;
width: 378px;
height: 52px;
background: #FFECAD;
border-radius: 10px;
border: 0.5px solid #FFECAD;
top:400px;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #797979;
`
const Para = styled.div`
position: absolute;
top:470px;
left:40px;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #929292;
`
const Para1 = styled.div`
position:absolute;
font-family: General Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
color: #FFC403;
top:468px;
left:225px;
`

const Login= ({
    
  }) => {
    return <Cont>
        <LogoImg src="/icons/clogo.png"/>
        <Header>Welcome!</Header>
        <Name>Sign up and build your skills with professional courses.</Name>

        <Text>Email</Text>
        <Input />
        <Data>Password</Data>
        <Inputpassword />
        <LoginBtn>Login</LoginBtn>
        <Para>Don't have an account yet?</Para>
        <Para1>Sign up</Para1>
            

    </Cont>
  };
  
  export default Login;
  