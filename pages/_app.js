import "../styles/globals.css";
import styled from "styled-components";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const r = useRouter();
  return (
    <>
      <Component {...pageProps} />

      <BotNav>
        <button onClick={() => r.push("/")}>Home</button>
        <button onClick={() => r.push("/Comps/Evie")}>Evie</button>
        <button onClick={() => r.push("/Comps/John")}>John</button>
        <button onClick={() => r.push("/Comps/Juhee")}>Juhee</button>
        <button onClick={() => r.push("/Comps/Julian")}>Julian</button>
      </BotNav>
    </>
  );
}

const BotNav = styled.div`
  position: fixed;
  bottom: 0px;
`;

export default MyApp;
