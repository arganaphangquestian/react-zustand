import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import Home from "./pages/Home";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    outline: none;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
