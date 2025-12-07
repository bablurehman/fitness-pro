// src/pages/Home.jsx
import React from "react";
import trainer from "../assets/images/trainer.avif";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Pricing from "../components/Home/Pricing";
import Offers from "../components/Home/Offers";
import Transformation from "../components/Home/Transformation";
import Testimonials from "../components/Home/Testimonials";
import Faqs from "../components/Home/Faqs";
import FooterNote from "../components/Home/FooterNote";
import Seo from "../components/Seo";


const Home = () => {
  return (
    <>
          <Seo
        title="FitnessPro | Expert Fitness Training & Programs"
        description="Achieve your fitness goals with FitnessPro — expert trainers, personalized workouts, and holistic wellness plans for a healthier lifestyle."
      />
      <Hero />

      <section
  id="about"
  className="coach-card relative bg-gray-50 mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 pt-10 pb-12"
>
  {/* Left Content */}
  <div className="coach-right flex flex-col md:w-3/5 sm:w-3/5 justify-center md:text-left space-y-6">
    <h2
      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-6 leading-snug"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      Meet Your{" "}
      <span className="text-green-500" data-aos="zoom-in" data-aos-duration="1200">
        Personal Coach
      </span>
    </h2>

    <p
      className="text-gray-700"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
    >
      With over <strong>8 years of experience</strong>, I’ve helped hundreds of clients achieve their <strong>ideal body</strong> through <strong>science-based training</strong> and holistic nutrition. My programs are personalized and tailored to your goals, ensuring <strong>sustainable results</strong> while improving strength, flexibility, and overall well-being.
      <br />
      <br />
      I provide dedicated support, consistent motivation, and precise progress tracking — helping you stay focused and celebrate every milestone on your journey toward becoming your <strong>best self</strong>.
    </p>

    <div
      className="flex justify-center md:justify-start"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <Link
        to="/about"
        className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 focus:ring-4 focus:ring-green-400/50"
      >
        Learn More
      </Link>
    </div>
  </div>

  {/* Right Image */}
  <div
    className="coach-left flex md:w-2/5 sm:w-2/5 justify-center mt-8 md:mt-0"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1200"
  >
    <img
      src={trainer}
      alt="Trainer"
      className="rounded-2xl shadow-xl w-full md:h-[400px] object-cover transition-transform duration-500 ease-in-out border border-black/35"
      loading="lazy"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="1200"
    />
  </div>
</section>

      <Offers />
      <Transformation />
      <Testimonials />
      <Pricing />
      <Faqs />
      <FooterNote />
    </>
  );
};

export default Home;
