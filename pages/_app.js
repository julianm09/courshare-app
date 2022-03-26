import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import AppProvider from "@/utils//provider";
import "semantic-ui-css/semantic.min.css";
import { StylesProvider } from "@mui/styles";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <StylesProvider>
        <Navbar />
        <Component {...pageProps} />
      </StylesProvider>
    </AppProvider>
  );
}

export default MyApp;
