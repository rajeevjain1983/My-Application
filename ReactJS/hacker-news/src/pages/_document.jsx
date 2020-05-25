import React from "react";
import Document, { Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage();
  }

  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/y18.gif" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>News Hacker App</title>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
