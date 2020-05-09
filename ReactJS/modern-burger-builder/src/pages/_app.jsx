import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Header, Footer } from "../components/features/content";
import { LightTheme, DarKTheme } from "../../styles/themes";
import GlobalStyle from "../../styles/globalStyles";
import configureStore from "../reduxStore/store";

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
        <Provider store={configureStore}>
          <GlobalStyle />
          <title>My Burger App</title>
          <Header toggleTheme={this.toggleTheme} />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
      </ThemeProvider>
    );
  }
}

export default burger_app;
