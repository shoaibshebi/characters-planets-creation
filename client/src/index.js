import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
import App from "./App";
import { client } from "./apolloClient";

const ErrorHandler = ({ error }) => {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

ReactDOM.render(
  <React.Fragment>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ErrorBoundary>
  </React.Fragment>,
  document.getElementById("root")
);
