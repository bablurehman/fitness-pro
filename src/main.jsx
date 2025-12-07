import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { HelmetProvider } from "react-helmet-async";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Initialize Vercel Speed Insights
injectSpeedInsights();

AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />      
    </HelmetProvider>
  </React.StrictMode>
);
