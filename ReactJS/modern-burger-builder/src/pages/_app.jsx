import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Header, Footer } from "../components/features/content";
import { LightTheme, DarKTheme } from "../../styles/themes";

import GlobalStyle from "../../styles/globalStyles";

class burger_app extends App {
  constructor(props) {
    super(props);
    this.state = { theme: DarKTheme };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme.name === "lightTheme") {
      this.setState({ theme: DarKTheme });
    } else {
      this.setState({ theme: LightTheme });
    }
  }

  render() {
    console.log("Render burger_app!!");
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <title>My Burger App</title>
        <Header toggleTheme={this.toggleTheme} />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    );
  }
}

export default burger_app;
