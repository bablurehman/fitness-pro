import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import test_bg from "../../assets/images/testimonials/bg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
 const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 700,
  cssEase: "linear",
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
};

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

        <div className="container relative z-20 mx-auto px-6 py-15 max-w-7xl">
          <div className="flex flex-col md:flex-row lg:flex-row items-start lg:space-x-12">
            
            {/* Left Content */}
            <div
              className="w-full mb-12 md:w-2/5 lg:mb-0"
              data-aos="fade-up-right"
              data-aos-duration="1200"
              data-aos-delay="150"
              data-aos-easing="ease-out-expo"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                Hear from <span className="text-green-500">My Global Clients</span>
              </h3>

           <p className="text-gray-300 text-base leading-relaxed mb-6">
  Discover how clients worldwide achieved their fitness goals through personalized programs, consistency, and expert guidance — unlocking confidence, energy, and sustainable results. These real transformations highlight the power of tailored training, mindset support, and long-term commitment, helping individuals overcome challenges, build discipline, and create healthier lifestyles that last.
</p>

            </div>

            {/* Right Slider */}
            <div
              className="w-full md:w-3/5 lg:w-3/5 relative"
              data-aos="fade-up-left"
              data-aos-duration="1200"
              data-aos-delay="250"
              data-aos-easing="ease-out-cubic"
            >
              <Slider {...sliderSettings}>
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="testimonials-card px-2 sm:px-4"
                    data-aos="flip-up"
                    data-aos-duration="950"
                    data-aos-delay={200 + i * 120}
                    data-aos-easing="ease-out-back"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200">
                      <div className="relative md:h-48 h-[150px] w-full overflow-hidden">
                        <img
                          src={t.image}
                          alt={t.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      <div className="p-3 sm:p-5">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-sm sm:text-lg text-gray-900 text-nowrap">
                            {t.name}
                          </p>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, index) => (
                              <FaStar
                                key={index}
                                className={`${
                                  index < (t.rating || 5)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-green-600 mb-3 text-[14px]">
                          {t.designation}
                        </p>

                        <p className="text-gray-600 leading-relaxed italic">
                          “{t.feedback}”
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
