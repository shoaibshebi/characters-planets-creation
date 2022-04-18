import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { client } from "./apolloClient";

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById("root")
);
