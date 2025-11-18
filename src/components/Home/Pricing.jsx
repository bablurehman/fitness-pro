import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff, FaCheckCircle, FaTags } from "react-icons/fa";
import { plans } from "../../assets/assets";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <>
    <section className="pt-5" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
          Membership - <span className="text-green-500">Plans</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose a plan that fits your fitness journey — flexible, transparent,
          and built for real progress.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center mb-8 gap-3 relative flex-wrap">
          <span
            onClick={() => setIsYearly(false)}
            className={`cursor-pointer font-semibold text-lg transition-all duration-500 ${
              !isYearly ? "text-green-600 scale-105" : "text-gray-500"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle billing cycle"
            className="focus:outline-none transform transition-all duration-500 hover:scale-110 mx-3"
          >
            {isYearly ? (
              <FaToggleOn className="text-green-500 text-4xl drop-shadow-sm transition-all duration-500" />
            ) : (
              <FaToggleOff className="text-gray-400 text-4xl drop-shadow-sm transition-all duration-500 hover:text-green-400" />
            )}
          </button>

          <span
            onClick={() => setIsYearly(true)}
            className={`cursor-pointer font-semibold text-lg transition-all duration-500 ${
              isYearly ? "text-green-600 scale-105" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-gradient-to-b ${plan.color} px-8 py-6 min-h-[500px] border border-slate-500`}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Yearly Save Badge */}
              <div
                className={`absolute top-4 left-4 transition-all duration-500 ${
                  isYearly
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <span className="flex items-center gap-1 bg-slate-950 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md animate-fadeIn">
                  <FaTags className="text-green-500 text-sm" /> Save 20% off
                </span>
              </div>

              <div>
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-500">
                  ₹
                  {isYearly
                    ? plan.yearly.toLocaleString()
                    : plan.monthly.toLocaleString()}
                  <span className="text-base font-medium text-gray-600">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {plan.description}
                </p>
                <ul role="list" className="text-left mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-1 text-gray-800"
                    >
                      <FaCheckCircle className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/booking"
                  className={`block w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${
                    plan.popular
                      ? "bg-gray-800 hover:bg-gray-900"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm mt-8 font-semibold">
          * All plans include free onboarding consultation and personalized
          fitness goal setup.
        </p>
      </div>
    </section>
    </>

  );
};

export default Pricing;
