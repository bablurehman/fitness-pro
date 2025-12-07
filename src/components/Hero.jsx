import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.avif";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen px-4 sm:px-10 py-20 overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight"
          data-aos="zoom-in"
        >
          Transform Your{" "}
          <span className="text-green-400">Body & Mind</span>
        </h1>

        <p
          className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Personalized fitness programs, expert trainers, and holistic wellness
          strategies to help you achieve your dream physique — and sustain it
          for life.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/booking"
            className="bg-green-400 hover:bg-green-300 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Book a Session
          </Link>

          <Link
            to="/services"
            className="border border-white text-white hover:border-green-400 hover:bg-green-400/5 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
