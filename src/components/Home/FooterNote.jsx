import React from "react";
import {
  FaHandshake,
  FaDumbbell,
  FaRegSmile,
  FaArrowRight,
} from "react-icons/fa";

const FooterNote = () => {
  return (
    <section
      className="pt-20 pb-10 overflow-hidden text-gray-900 bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h4
          className="text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-tight"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Your Fitness Journey Starts{" "}
          <span className="text-green-500">Today</span>
        </h4>
        <p
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Start your fitness journey with expert guidance and support to build
          strength, confidence, and lasting results.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {[
            {
              icon: (
                <FaDumbbell className="text-green-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              ),
              title: "Personalized Coaching",
              desc: "Custom workouts and nutrition plans built to match your lifestyle and goals.",
              aos: "fade-right",
            },
            {
              icon: (
                <FaHandshake className="text-green-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              ),
              title: "Trusted Guidance",
              desc: "Work 1-on-1 with a certified coach who’s fully invested in your success.",
              aos: "zoom-in",
            },
            {
              icon: (
                <FaRegSmile className="text-green-500 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              ),
              title: "Long-Term Results",
              desc: "Develop strength, discipline, and habits that last well beyond your program.",
              aos: "fade-left",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-2xl p-6 border border-gray-500 bg-gray-50 hover:bg-green-50 hover:border-green-400 transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]"
              data-aos={item.aos}
              data-aos-delay={200 * i}
              data-aos-duration="1000"
            >
              {item.icon}
              <p className="text-xl font-semibold mb-4">{item.title}</p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-green-500 hover:bg-slate-900 text-white font-semibold text-md px-5 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            Start Your Transformation
            <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterNote;
