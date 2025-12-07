import React, { useEffect } from "react";
import './App.css'
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import AOS from "aos";


function App() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
<Header/>
<Navbar/>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;


