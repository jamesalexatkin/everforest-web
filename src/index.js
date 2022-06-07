import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// Add this in node_modules/react-dom/index.js
window.React1 = require("react");
