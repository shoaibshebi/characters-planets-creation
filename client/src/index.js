import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
};
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/",
  cache: new InMemoryCache(),
  // defaultOptions: defaultOptions,
});

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
