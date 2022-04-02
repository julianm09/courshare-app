import styled from "styled-components";
import "firebase/firestore";
import "firebase/auth";
import { auth } from "@/config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useServer, useUser } from "@/utils/provider";
import ax from "axios";
import { Directions } from "@mui/icons-material";
import { ThreeCircles } from "react-loader-spinner";

const Login = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);

  const { server } = useServer();

  const createUser = async (user) => {
    await ax
      .post(`${server}/user/add`, {
        name: name,
        email: user.email,
        uid: user.uid,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { user, setUser } = useUser();

  const getUserById = async (user) => {
    const res = await ax.get(`${server}/user/${user.uid}`);
    /* console.log(res.data); */
    setUser(res.data[0]);
    localStorage.setItem("user", JSON.stringify(res.data[0]));
  };

  const googleSignIn = async (e) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential && credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        createUser(user).then(() => {
          getUserById(user);
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        createUser(user).then(() => {
          getUserById(user);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        getUserById(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOut = async (e) => {
    if (user) {
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <>
      {loading ? (
        <LoadScreen>
          <ThreeCircles
            color="#FFC403"
            height={50}
            width={50}
            ariaLabel="three-circles-rotating"
          />
        </LoadScreen>
      ) : (
        <></>
      )}
      {showSignUp ? (
        <SignUp>
          <Overlay onClick={() => setShowSignUp(!showSignUp)} />
          <SignUpForm>
            <LogoImg src="/icons/clogo.png" />

            <Name>
              Sign up and build your skills with professional courses.
            </Name>
            <div style={{ margin: "15px 0" }}>
              <Text>Name</Text>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Text>Email</Text>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div style={{ margin: "15px 0" }}>
              <Data>Password</Data>
              <PasswordCont>
                <Inputpassword
                  type={showPassword ? "" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ShowPass onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "hide" : "show"}
                </ShowPass>
              </PasswordCont>
            </div>

            <LoginBtn onClick={() => signUp()}>Sign Up</LoginBtn>
          </SignUpForm>
        </SignUp>
      ) : (
        <></>
      )}
      <Cont>
        <Left>
          <LoginImg src="/LoginImg.png" />
        </Left>
        <Right>
          {/* {user ? "signed in" : "signed out"} */}
          <LogoImg src="/icons/clogo.png" />
          <Header>Welcome!</Header>
          <Name>Sign up and build your skills with professional courses.</Name>

          <div style={{ margin: "15px 0" }}>
            <Text>Email</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ margin: "15px 0" }}>
            <Data>Password</Data>
            <PasswordCont>
              <Inputpassword
                type={showPassword ? "" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowPass onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "hide" : "show"}
              </ShowPass>
            </PasswordCont>
          </div>
          <LoginDiv>
            <LoginBtn onClick={signIn}>Login</LoginBtn>
            <Para1 onClick={googleSignIn}>Sign in With google</Para1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Para>Don't have an account yet?</Para>
              <Para1 onClick={() => setShowSignUp(!showSignUp)}>Sign up</Para1>
            </div>
          </LoginDiv>
        </Right>
      </Cont>
    </>
  );
};

export default Login;

const Cont = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  background: white;
  z-index: 999999;
  position: fixed;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LoginImg = styled.img`
  min-width: 50vw;
`;

const Right = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 15px 0;
`;

const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin: 0 0 15px 0;
`;
const Name = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #929292;
  margin: 0 0 15px 0;
`;
const Text = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
`;
const Input = styled.input`
  width: 378px;
  height: 52px;
  margin-top: 5px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: none;
  padding-left: 10px;
  color: #999;
`;
const Data = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #5e5e5e;
  top: 290px;
`;

const PasswordCont = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ShowPass = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #999;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const Inputpassword = styled.input`
  width: 378px;
  height: 52px;
  top: 319px;
  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  margin-top: 5px;
  outline: none;
  padding-left: 10px;
  color: #999;
`;
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const LoginBtn = styled.button`
  width: 378px;
  height: 52px;
  background: #ffecad;
  border-radius: 10px;
  border: 0.5px solid #ffecad;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #797979;
  margin: 15px 0 5px 0;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  }
`;
const Para = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #929292;
  margin: 10px;
`;
const Para1 = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffc403;
  cursor: pointer;
  margin: 10px 0;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.38);
  width: 100%;
  height: 100vh;
`;

const SignUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.div`
  min-width: 519px;
  min-height: 528px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  flex-direction: column;
`;

const LoadScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;
