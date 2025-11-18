import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.avif";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[85vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 will-change-transform"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${hero})`,
  }}
></div>

      {/* Hero Content */}
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center gap-3 top-8"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Transform Your{" "}
          <span
            className="text-green-400"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="900"
          >
            Body & Mind
          </span>
        </h1>

        <p
          className="text-gray-200 text-[16px] sm:text-xl md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1200"
        >
          Personalized fitness programs, expert trainers, and holistic wellness
          strategies designed to help you achieve your dream physique — and
          sustain it for life.
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-5"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <Link
            to="/booking"
            className="bg-green-400/90 hover:bg-green-400 text-black font-semibold px-5 sm:px-8 md:px-10 py-1 sm:py-3 rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base"
          >
            Book a Session
          </Link>

          <Link
            to="/services"
            className="border border-white text-white hover:border-green-400 hover:bg-green-500/10 font-semibold px-5 sm:px-8 md:px-10 py-1 sm:py-3 rounded-lg focus:ring-4 focus:ring-green-400/50 transition-all duration-300 ease-in-out text-sm sm:text-base"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
