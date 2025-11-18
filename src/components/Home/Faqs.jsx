import React, { useState } from "react";
import { FaPlus, FaEnvelope, FaTimes } from "react-icons/fa";
import { faqs } from "../../assets/assets";

const Faqs = () => {
  // ✅ First FAQ open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative pt-15 bg-white overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 max-w-7xl md:max-w-6xl">
        {/* Header */}
        <div
          className="mb-12 text-center"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Get clarity on how online fitness coaching works and start your
            transformation with confidence.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm md:grid-cols-3 gap-10 items-start">
          {/* Left: FAQs */}
          <div
            className="md:col-span-2 flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-green-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none px-5 py-4"
                >
                  <h3 className="font-semibold  sm:text-lg pr-6">
                    {faq.question}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "text-green-600 rotate-180"
                        : "text-gray-500 rotate-0"
                    }`}
                  >
                    {activeIndex === index ? <FaTimes /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`px-5 text-gray-600 text-base bg-green-100 leading-relaxed transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 pb-4"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          {/* Right: Contact Card */}
          <div
            className="flex flex-col justify-start gap-8 sticky top-24 hidden md:flex"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-lg mb-5">
                <FaEnvelope className="text-green-600 text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Have a Question?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Need help understanding our training plans or nutrition approach? Message me directly for expert guidance and clear answers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 w-full text-center"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Faqs;
