import React from "react";
import App from "next/app";
import GlobalStyle from "../styles/globalStyles";

// import configureStore from "../reduxStore/store";

class NewsHackerApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // console.log("pageProps", pageProps);
    return (
      //   <Provider store={configureStore}>
      <>
        <GlobalStyle />
        <title>News Hacker App</title>
        <Component {...pageProps} />
      </>
      //   </Provider>
    );
  }
}

export default NewsHackerApp;
