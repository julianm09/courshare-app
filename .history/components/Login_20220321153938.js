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

const Login = ({}) => {
  const [name, setName] = useState("Julian");
  const [email, setEmail] = useState("julianmayes@gmail.com");
  const [password, setPassword] = useState("Hello123!");

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
        // Signed in
        const user = userCredential.user;
        // ...
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
        // Signed in
        const user = userCredential.user;
        // ...
        createUser(user).then(() => {
          getUserById(user);
        });
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
    <Cont>
      <Left>
        <LoginImg src="/LoginImg.svg" />
      </Left>
      <Right>
        {/* {user ? "signed in" : "signed out"} */}
        <LogoImg src="/icons/clogo.png" />
        <Header>Welcome!</Header>
        <Name>Sign up and build your skills with professional courses.</Name>
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
          <Inputpassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
            <Para1>Sign up</Para1>
          </div>
        </LoginDiv>
      </Right>
    </Cont>
  );
};

export default Login;

const Cont = styled.div`
  width: 100%;
  top: 0;
  background: white;
  z-index: 999999;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 50vw;
  height: 100vh;
`;
const LoginImg = styled.img`
  width: 50vw;
`;
const Right = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  line-height: 19px;
  color: #929292;
  margin-top: 15px;
  margin-right: 10px;
`;
const Para1 = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ffc403;
  cursor: pointer;
  margin: 10px 0;
`;
