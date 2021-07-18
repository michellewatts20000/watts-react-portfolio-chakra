import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import customTheme from "./utils/theme";
import { BrowserRouter } from "react-router-dom"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
  <BrowserRouter>   
      <App />
       </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
