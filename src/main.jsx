import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./main.css";

console.log(
  "%c; %cHi! You opened the console, so we would probably get along.\nThe source is on GitHub: https://github.com/cederdorff/cederdorff.github.io \n// RACE",
  "font-size: 2rem; font-weight: 700; color: #e7c960",
  "font-size: 1rem; line-height: 1.6"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
