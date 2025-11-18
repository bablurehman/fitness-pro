import React from "react";
// Icons - Clean Combined Imports
import {
  FaCheckCircle,
  FaRunning,
  FaDumbbell,
  FaLeaf,
  FaBolt,
  FaUserCheck,
  FaHeart,
  FaRegCalendarCheck,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

import { FiClock, FiTrendingUp, FiUserCheck } from "react-icons/fi";

import resultsImg from "../assets/images/programs.webp";
import Breadcrumb from "../components/Breadcrumb";
import { programsData } from "../assets/assets";
import { stepsData } from "../assets/assets";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Programs = () => {
  return (
    <>
      <Seo
        title="Fitness Programs | FitnessPro"
        description="Choose from FitnessPro’s tailored programs for fat loss, muscle gain, strength, and long-term health improvement with expert coaching."
      />

      <Breadcrumb top="Our Programs" bottom="Progams" />

      <section id="programs" className="px-3 pt-15">
        <div className="container mx-auto max-w-7xl sm:max-w-6xl">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Exclusive Training -{" "}
              <span className="text-green-500">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto sm:text-lg mt-1">
              Choose a program designed to match your fitness goals — from fat
              loss & muscle gain to strength, discipline, and long-term
              lifestyle improvement.
            </p>
          </div>

          <div className="programs-card grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.map((p, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                data-aos-duration="800"
                className="
            bg-white rounded-2xl border border-gray-400 p-5 group transition-all duration-300 
            hover:-translate-y-1 hover:border-green-500 hover:shadow-[0_8px_26px_rgba(0,0,0,0.08)]
          "
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 hover:bg-green-100 border border-gray-300 hover:border-gray-400 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">{p.icon}</span>
                </div>

                <h3 className="tex-xl text-nowrap font-bold text-gray-900 mb-1">
                  {p.title}
                </h3>

                <p className="text-gray-800 text-lg leading-relaxed mb-3">
                  {p.desc}
                </p>

                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FaCheckCircle className="text-green-600 text-base" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pt-15">
        <div className="container mx-auto max-w-7xl sm:max-w-6xl">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
              Our Program <span className="text-green-500">Workflow</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto sm:text-lg mt-1">
              A systematic execution model designed for measurable and long-term
              transformation
            </p>
          </div>

          <div className="steps-card grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
            {stepsData.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                data-aos-offset="120"
                className="border border-gray-400 bg-green-50 rounded-xl p-5 flex flex-col 
      hover:border-green-500 hover:shadow-md transition-transform hover:-translate-y-2 duration-500 ease-in-out"
              >
                <span className="font-semibold text-[16px] text-red-500 mb-2">
                  {item.step}
                </span>

                <h4 className="text-[18px] sm:text-[20px] font-semibold text-nowrap text-slate-900 mb-5">
                  {item.title}
                </h4>

                <ul className="text-gray-600 space-y-3 leading-relaxed">
                  {item.points.map((p, idx) => (
                    <li
                      key={idx}
                      data-aos="fade-up"
                      data-aos-delay={idx * 80}
                      className="border-l-2 pl-3 border-green-500"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-8 mt-10 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-green-600 to-black/95"></div>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          {/* Unique Animation 1 — Zoom In */}
          <p
            className="text-xl sm:2xl md:text-3xl font-bold mb-4"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            Built For Real-Life Progress
          </p>

          {/* Unique Animation 2 — Fade Left */}
          <p
            className="text-gray-200 max-w-2xl mx-auto px-1 sm:text-xl leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="900"
            data-aos-easing="ease-out-sine"
          >
            No shortcuts — just data-driven routines, consistent feedback,
            nutrition support, and accountability to help you achieve lasting
            transformation.
          </p>

          {/* Unique Animation 3 — Fade Right */}
          <div
            className="mt-8"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="900"
            data-aos-easing="ease-out-sine"
          >
            <Link
              to="/booking"
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full border border-transparent hover:bg-transparent hover:border-white transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-0 pt-15">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              data-aos="flip-up"
              data-aos-duration="800"
            >
              Transformation <span className="text-green-500">Outcomes</span>
            </h3>

            <p
              className="text-gray-600 max-w-2xl mx-auto sm:text-lg mt-1"
              data-aos="fade-down"
              data-aos-delay="120"
              data-aos-duration="900"
            >
              Measurable performance, visible changes, and sustainable health
              results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              {/* Card */}
              <div
                className="hover:bg-green-50 border border-gray-400 hover:border-gray-500 rounded-2xl p-3 sm:p-8 shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-5">
                  <span className="border-l-3 border-green-500 pl-2"></span>
                  Expected Changes Over Time
                </h4>

                <div className="space-y-6">
                  {[
                    {
                      week: "Weeks 1–2",
                      desc: "Habit setup • Energy improvement • Better discipline",
                    },
                    {
                      week: "Weeks 3–6",
                      desc: "Visible strength & stamina gains • Reduced fat percentage",
                    },
                    {
                      week: "Weeks 6–10",
                      desc: "Noticeable muscle tone • Improved posture & strength",
                    },
                    {
                      week: "Weeks 10–12",
                      desc: "Sustainable physique & lifestyle transformation",
                    },
                  ].map((milestone, i) => (
                    <div
                      key={i}
                      className="flex gap-5 items-start"
                      data-aos="zoom-in"
                      data-aos-delay={i * 150}
                      data-aos-duration="700"
                    >
                      <div className="bg-green-100 text-green-600 text-nowrap font-semibold px-3 py-1 rounded-full">
                        {milestone.week}
                      </div>
                      <p className="text-gray-700 mt-1">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: <FiClock className="text-4xl text-green-600" />,
                    value: "8–12 Weeks",
                    sub: "Visible Body Change",
                  },
                  {
                    icon: <FiUserCheck className="text-4xl text-green-600" />,
                    value: "90%+",
                    sub: "Program Success",
                  },
                  {
                    icon: <FiTrendingUp className="text-4xl text-green-600" />,
                    value: "100%",
                    sub: "Personalized Plans",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="hover:bg-green-50 border border-gray-500 hover:border-green-600 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
                    data-aos="zoom-in-up"
                    data-aos-delay={i * 150}
                    data-aos-duration="900"
                  >
                    <div className="flex justify-center mb-2">{item.icon}</div>
                    <p className="text-xl text-nowrap font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-gray-600">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={resultsImg}
                alt="Fitness transformation results"
                className="rounded-2xl shadow-lg w-full h-[380px] sm:h-[480px] object-cover border"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section — Who It's For */}
      <section className="px-3 sm:px-0 not-first-of-type:py-24">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h4
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
              data-aos="flip-up"
              data-aos-duration="900"
            >
              Built for Those{" "}
              <span className="text-green-500">Ready to Transform</span>
            </h4>

            <p
              className="text-gray-600 max-w-2xl mx-auto sm:text-lg mt-1"
              data-aos="fade-down"
              data-aos-delay="120"
              data-aos-duration="900"
            >
              Tailored for individuals committed to progress, sustainable
              fitness, and a disciplined lifestyle transformation — without
              shortcuts.
            </p>
          </div>

          {/* Cards */}
          <div className="transform-card grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                icon: <FaUserCheck />,
                text: "For individuals seeking structured, guided fitness plans.",
              },
              {
                icon: <FaRegCalendarCheck />,
                text: "Perfect for those needing accountability and reviews.",
              },
              {
                icon: <FaDumbbell />,
                text: "Ideal for people focused on strength and technique.",
              },
              {
                icon: <FaLeaf />,
                text: "For anyone aiming for balanced, sustainable nutrition.",
              },
              {
                icon: <FaChartLine />,
                text: "Built for consistent growth and measurable progress.",
              },
              {
                icon: <FaHeart />,
                text: "For improving energy, discipline, and healthy habits.",
              },
              {
                icon: <FaRunning />,
                text: "Perfect for endurance-driven, performance-focused people.",
              },
              {
                icon: <FaUserTie />,
                text: "Made for professionals balancing work and fitness goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-green-50 border border-gray-300 rounded-2xl p-6 
            shadow-sm hover:shadow-xl hover:border-transparent 
            transition-all duration-500 ease-out flex flex-col items-center text-center overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 flex items-center justify-center 
              rounded-full bg-green-50 text-green-600 text-2xl 
              shadow-sm border border-gray-200 
              group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg transition-all duration-500"
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p className="relative z-10 mt-4 text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
