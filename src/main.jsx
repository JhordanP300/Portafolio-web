// ============================================================
// 🚀 MAIN.JSX — Punto de entrada de la aplicación React
// ============================================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Monta React en el div#root del index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
