import React from "react";
import ReactDOM from "react-dom/client";
import App from "containers/app/App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "api";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
