import React from "react";
import { offers } from "../../assets/assets";

const Offers = () => {
  return (
    <section
      className="pt-20 bg-white"
      id="services"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div
          className="text-center mb-14"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          data-aos-duration="900"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Fitness Plans Built for{" "}
            <span className="text-green-500">Every Goal</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert-guided programs for strength, conditioning, mobility, and
            lifestyle health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-green-50 rounded-2xl px-5 py-8 border border-gray-300 hover:border-gray-500 text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow hover:shadow-md"
              data-aos="zoom-in-up" // Single smooth animation for the whole card
              data-aos-delay={index * 150} // staggered delay for professional effect
              data-aos-duration="1000"
            >
              <div className="flex justify-center mb-6">{offer.icon}</div>
              <p className="text-xl font-bold text-slate-950 mb-3">
                {offer.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
