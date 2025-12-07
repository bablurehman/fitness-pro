import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { testimonials } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import test_bg from "../../assets/images/testimonials/bg.webp";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-10 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* Heading */}
      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-30">
        <h3
          className="text-3xl md:text-4xl font-bold text-slate-950 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="120"
          data-aos-easing="ease-out-expo"
        >
          Testimonials -{" "}
          <span className="text-green-500">Client Success Stories</span>
        </h3>
      </div>

      {/* Background */}
      <div className="relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${test_bg})`,
          }}
        ></div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 py-12 max-w-7xl">
  <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

    {/* Left Content */}
    <div
      className="w-full lg:w-2/5 space-y-4"
      data-aos="fade-up-right"
      data-aos-duration="1200"
      data-aos-delay="150"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
        Hear from{" "}
        <span className="text-green-500">My Global Clients</span>
      </h3>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        Discover how clients worldwide achieved their fitness goals through
        personalized programs, consistency, and expert guidance — unlocking
        confidence, energy, and sustainable results. These real transformations
        highlight the power of tailored training, mindset support, and long-term
        commitment.
      </p>
    </div>

    {/* Right Slider */}
    <div
      className="w-full lg:w-3/5"
      data-aos="fade-up-left"
      data-aos-duration="1200"
      data-aos-delay="250"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={500}
        breakpoints={{
          0: { slidesPerView: 1 },
          360: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 2, spaceBetween: 14 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                
                {/* Image */}
                <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-900">
                      {t.name}
                    </p>

                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < (t.rating || 5)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-green-600 text-sm sm:text-base mb-3">
                    {t.designation}
                  </p>

                  <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                    “{t.feedback}”
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
