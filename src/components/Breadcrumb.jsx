import React from 'react';
import breadcrumb from "../assets/images/breadcrumb.avif";

const Breadcrumb = ({ top, bottom }) => {
  return (
    <>
      <section
        className="relative h-80 w-full flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${breadcrumb})`,
          }}
        ></div>

<div className="absolute z-10 text-center text-white">
  <h1
    className="text-2xl sm:text-3xl font-extrabold mb-3 mt-20"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    {top} - <span className="text-green-500">Fitness</span>Pro
  </h1>

  <nav
    className="text-sm sm:text-lg font-bold"
    data-aos="fade-up"
    data-aos-delay="450"
    data-aos-duration="1000"
  >
    <a href="/" className="hover:text-gray-300 transition">
      Home
    </a>
    <span className="mx-2 text-green-500">/</span>
    <span className="text-green-500">{bottom}</span>
  </nav>
</div>
      </section>
    </>
  );
};

export default Breadcrumb;
