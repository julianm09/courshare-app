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
import { useEffect, useState } from "react";
import { useUser } from "@/utils/provider";
import ax from "axios";

const Login = ({}) => {
  const [name, setName] = useState("Julian");
  const [email, setEmail] = useState("julianmayes@gmail.com");
  const [password, setPassword] = useState("Hello123!");

  const createUser = async (user) => {
    await ax
      .post("http://localhost:5000/user/add", {
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
    const res = await ax.get(`http://localhost:5000/user/${user.uid}`);
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
      {user ? "signed in" : "signed out"}
      <LogoImg src="/icons/clogo.png" />
      <Header>Welcome!</Header>
      <Name>Sign up and build your skills with professional courses.</Name>
      <Text>Name</Text>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Text>Email</Text>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      <Data>Password</Data>
      <Inputpassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginBtn onClick={signIn}>Login</LoginBtn>
      <LoginBtn onClick={googleSignIn}>Sign in With google</LoginBtn>
      <Para>Don't have an account yet?</Para>
      <Para1 onClick={signUp}>Sign up</Para1>
      <Para1 onClick={handleSignOut}>Sign out</Para1>
    </Cont>
  );
};

export default Login;

const Cont = styled.div`
  width: 100%;
  min-height: calc(100vh);
  position: fixed;
  top: 0;
  background: white;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoImg = styled.img`
  left: 170px;
`;

const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;
const Name = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #929292;
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

  background: #fcfcfc;
  border: 0.5px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
`;
const Para = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #929292;
`;
const Para1 = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ffc403;
  cursor: pointer;
`;
