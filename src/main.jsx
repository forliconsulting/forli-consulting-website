// filepath: /c:/Users/fc12/Documents/code/forli-consulting-website/forli-consulting-website/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/forli-consulting-website">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);