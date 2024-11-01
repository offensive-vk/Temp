import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import { MovieFinderApp } from "./MovieFinderApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <MovieFinderApp />
    </HelmetProvider>
  </React.StrictMode>,
);
