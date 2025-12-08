import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./i18n/config.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
