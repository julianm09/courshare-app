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
        <button onClick={() => r.push("/comps/evie")}>Evie</button>
        <button onClick={() => r.push("/comps/john")}>John</button>
        <button onClick={() => r.push("/comps/juhee")}>Juhee</button>
        <button onClick={() => r.push("/comps/julian")}>Julian</button>
      </BotNav>
    </>
  );
}

const BotNav = styled.div`
  position: fixed;
  bottom: 0px;
`;

export default MyApp;
