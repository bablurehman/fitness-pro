import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { HelmetProvider } from "react-helmet-async";

AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});

const Root = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <Root />      
    </HelmetProvider>
  </React.StrictMode>
);
