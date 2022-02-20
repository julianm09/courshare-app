import "../styles/globals.css";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import AppProvider from "@/utils//provider";
import "semantic-ui-css/semantic.min.css";
import { StylesProvider } from "@mui/styles";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
      
    }


  }, []);
  

  const r = useRouter();
  return (
    <AppProvider>
      <StylesProvider>
        <Navbar />
        <Component {...pageProps} />
      </StylesProvider>
    </AppProvider>
  );
}

const BotNav = styled.div`
  position: fixed;
  bottom: 0px;
`;

export default MyApp;
