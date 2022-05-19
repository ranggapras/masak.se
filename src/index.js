import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./scss/custom.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ApolloProvider } from "@apollo/client";
import client from "./Configs/apollo-client";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <CookiesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </ApolloProvider>
);
