import React from "react";
import {
  FaDumbbell,
  FaLeaf,
  FaHeartbeat,
  FaUserTie,
  FaLaptop,
  FaRunning,
  FaUtensils,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import ps from "../assets/images/process.avif";
import { serviceData } from "../assets/assets";
import { serviceProcess } from "../assets/assets";
import { serviceTestimonials } from "../assets/assets";
import Seo from "../components/Seo";

const Services = () => {
  const features = [
    { icon: <FaUserTie />, title: "Certified Experts" },
    { icon: <FaHeartbeat />, title: "Holistic Approach" },
    { icon: <FaCheckCircle />, title: "Result Driven" },
    { icon: <FaLaptop />, title: "Online & Hybrid" },
  ];

  return (
    <>
      <Seo
        title="Our Services | FitnessPro Training Programs"
        description="Explore FitnessPro services: personalized training, nutrition guidance, and wellness programs designed to help you achieve your ideal body and health goals."
      />

      <Breadcrumb top="Our Services" bottom="Services" />

      {/* SERVICES SECTION */}
      <section className="pt-15 px-3">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900">
              Our Signature<span className="text-green-500"> Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto sm:text-lg mt-1">
              Expert-designed training programs built to enhance your strength,
              endurance, and overall performance with lasting results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="sprograms-card grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {serviceData.map((service, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={150 * (i + 1)}
                className="group bg-green-50 hover:bg-green-100 rounded-2xl border border-gray-400 hover:border-green-400 py-5 px-4 sm:p-8 shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-lg text-green-500 group-hover:text-green-600 transition-all duration-500">
                    {service.icon}
                  </span>
                  <p className="text-lg text-nowrap font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-500">
                    {service.title}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING PROCESS */}
      <section className="px-3 pt-20 ">
        <div className="container mx-auto max-w-7xl">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14"
            data-aos="fade-up"
          >
            How Our<span className="text-green-500"> Program Works</span>
          </h3>

          <div className="sprocess-card grid md:grid-cols-2 items-stretch gap-8">
            <div
              className=" flex flex-col justify-center"
              data-aos="fade-right"
            >
              <div className="space-y-6">
                {serviceProcess.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 "
                    data-aos="fade-up"
                    data-aos-delay={120 * (i + 1)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className=" flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="">
                <img
                  src={ps}
                  alt="Training Process"
                  className="rounded-xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-3 pt-20 ">
        <div className="container mx-auto max-w-7xl text-center">
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-gray-900"
            data-aos="fade-up"
          >
            Why <span className="text-green-500">Choose Us?</span>
          </h3>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg mb-14 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We combine certified expertise, holistic care, and accountability to
            make your transformation effective, enjoyable, and sustainable.
          </p>

          <div className="choose-card grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={150 * (i + 1)}
                className="group relative bg-gray-50 hover:bg-green-50 rounded-xl border border-gray-400 hover:border-green-400  px-4 py-5 sm:p-4 md:p-8 shadow-md hover:shadow-green-500/20 transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
              >
                <div className="flex justify-center mb-5">
                  <div className="p-3 text-green-400 group-hover:text-gray-900 bg-gray-50 hover:bg-green-100 rounded-full text-2xl border border-gray-300 group-hover:border-green-400">
                    {item.icon}
                  </div>
                </div>
                <p className="font-semibold text-lg text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
            What Our <span className="text-green-500">Clients Say</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {serviceTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-gray-100  border border-gray-300 hoverborder-gray-400 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={150 * (i + 1)}
              >
                <FaQuoteLeft className="text-green-500 text-2xl mb-3 mx-auto" />
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-gray-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
