import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@mui/styles";
/* import theme from '../src/theme'; */

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = await new ServerStyleSheet()
    const materialSheets = await new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
          })
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {materialSheets.getStyleElement()}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )
        }
      } finally {
        styledComponentsSheet.seal()
      }
  }
}

export default MyDocument;
