import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "normalize.css";
import "./styles/fonts.css";
import "./styles/global.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
