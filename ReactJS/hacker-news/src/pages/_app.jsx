import React from "react";
import App from "next/app";
import GlobalStyle from "../styles/globalStyles";
import Header from "../components/features/content/Header";

class NewsHackerApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <title>News Hacker App</title>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default NewsHackerApp;
