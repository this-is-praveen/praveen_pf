import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const RootElement = document.getElementById("root");
const root = RootElement ? ReactDOM.createRoot(RootElement) : { render: () => <></> };

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
