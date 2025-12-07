import React, { useEffect, useState, useRef } from "react";
import {
  FaDumbbell,
  FaHeartbeat,
  FaMedal,
  FaUserCheck,
  FaCheckCircle,
  FaTrophy,
  FaRunning,
  FaUsers,
  FaSmile,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import pt from "../assets/images/personal-trainer.avif";
import journey from "../assets/images/journey.avif";
import Seo from "../components/Seo";
import { mvData } from "../assets/assets";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  // Animated Counter
  const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!startCount) return;
      let start = 0;
      const end = parseInt(target);
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [startCount, target, duration]);
    return <>{count}</>;
  };

  return (
    <>
      <Seo
        title="About Us | FitnessPro"
        description="Learn more about FitnessPro — your trusted partner for fitness, training, and a healthy, sustainable lifestyle."
      />

      <Breadcrumb top="About Us" bottom="About" />

      <section className="px-3 py-15">
        <div className="container mx-auto max-w-7xl">
          <div className=" mb-14" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-center font-bold mb-1 text-gray-900">
              Our <span className="text-green-500">Journey</span> of
              Transformation
            </h2>
            <p className="text-gray-600 max-w-2xl text-left sm:text-center sm:mx-auto sm:text-lg mt-1">
              Our journey began over a decade ago — driven by a deep commitment
              to help people build confidence, discipline, and strength through
              effective training and balanced nutrition.
            </p>
          </div>

          <div className="container mx-auto sm:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left Column - Heading + Description */}
              <div
                className="md:w-1/2"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900">
                  The Philosophy Behind Our Training Approach
                </h3>

                <p className="text-gray-700 md:text-lg leading-relaxed">
                  Our training philosophy is grounded in discipline,
                  consistency, and a results-driven framework. Every program
                  follows structured progression, sustainable routines, and a
                  balanced focus on effort and recovery. We also support
                  individuals aiming to become personal trainers with guidance
                  on effective methods, client-focused planning, and industry
                  standards. By promoting mindful movement and long-term habit
                  building, we help clients achieve meaningful and lasting
                  transformation.
                </p>
              </div>

              {/* Right Column - Image */}
              <div
                className="md:w-1/2"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img
                  src={journey}
                  alt="Professional fitness training services"
                  loading="lazy"
                  className="w-full object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section ref={statsRef} className="pt-15 pb-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h4
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-14"
            data-aos="fade-up"
          >
            Achievements <span className="text-green-400">in Numbers</span>
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                icon: <FaUsers />,
                label: "Clients Trained",
                value: 500,
                suffix: "+",
              },
              {
                icon: <FaTrophy />,
                label: "Transformations",
                value: 350,
                suffix: "+",
              },
              {
                icon: <FaRunning />,
                label: "Workshops Conducted",
                value: 120,
                suffix: "+",
              },
              {
                icon: <FaSmile />,
                label: "Positive Feedback",
                value: 98,
                suffix: "%",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="flex flex-col items-center"
              >
                <div className="text-green-400 text-3xl sm:text-5xl mb-3">
                  {item.icon}
                </div>

                <p className="text-xl sm:text-4xl font-bold text-center mb-2">
                  {startCount ? (
                    <Counter target={item.value} duration={2000} />
                  ) : (
                    0
                  )}
                  {item.suffix}
                </p>

                <p className="text-gray-300 text-sm sm:text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRAINING APPROACH ===================== */}
      <section
        id="training-approach"
        className="pt-15 bg-gray-50"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-green-500">Training Approach</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every program I design focuses on long-term sustainability, built
              around balance, progression, and mindset growth.
            </p>
          </div>

          {/* Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Column - Points + CTA */}
            <div
              className="md:col-span-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              <ul className="space-y-6 text-gray-700 text-lg mb-8">
                {[
                  "Functional strength and movement-based workouts.",
                  "Nutrition guidance rooted in science, not fads.",
                  "Accountability systems that keep you consistent.",
                  "Mindset and recovery coaching for full well-being.",
                  "Progress tracking to ensure measurable results.",
                  "Injury prevention through smart training techniques.",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay={150 * (i + 1)}
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Image */}
            <div
              className="md:col-span-6 flex justify-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <img
                src={pt}
                alt="Functional fitness and personal training approach"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CERTIFICATIONS & EXPERTISE ===================== */}
      <section className="px-3 pt-15 ">
        <div className="container mx-auto max-w-7xl text-center">
          {/* Section Header */}
          <div className="mb-14" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-green-500">Expertise</span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering every client with science-backed fitness guidance and
              personalized training expertise.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="certifications-card grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                icon: (
                  <FaMedal className="text-blue-500 text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300" />
                ),
                label: "Certified Trainer",
                desc: "Creates safe, efficient programs that build strength, endurance, and lasting performance.",
              },
              {
                icon: (
                  <FaHeartbeat className="text-red-500 text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300" />
                ),
                label: "Nutrition Specialist",
                desc: "Designs personalized meal plans to boost energy, recovery, and sustainable fitness growth.",
              },
              {
                icon: (
                  <FaDumbbell className="text-green-500 text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300" />
                ),
                label: "Functional Coach",
                desc: "Improves movement control, posture, and agility with science-based functional training.",
              },
              {
                icon: (
                  <FaUserCheck className="text-yellow-500 text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300" />
                ),
                label: "Transformation Expert",
                desc: "Guides clients toward visible, measurable, and lasting changes in body and mindset.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white hover:bg-green-50 border border-gray-300 rounded-xl px-4 py-6 sm:p-6 shadow-md hover:shadow-xl hover:border-green-400 transition-all duration-500 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={150 * (idx + 1)}
              >
                {/* Subtle background highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-green-50/30 rounded-xl transition-all duration-500"></div>

                <div className="relative flex flex-col items-center text-center">
                  <div className="p-3 mb-4 rounded-full bg-green-50 border border-gray-300 group-hover:border-green-300 group-hover:bg-green-100 transition-all duration-500">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-lg text-nowrap mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION & VISION ===================== */}
      <section className="px-3 pt-15 pb-20">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">
              Our Mission & <span className="text-green-500">Vision</span>
            </h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Empowering individuals to transform their lives through balanced
              fitness, mindful nutrition, and motivation.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="max-w-7xl sm:max-w-6xl mx-auto">
            <div className="transform-card grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-10">
              {mvData.map((item, i) => (
                <div
                  key={i}
                  className="shadow-xl border border-gray-200 rounded-xl p-5 sm:p-8 md:p-10"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <p className="text-green-600 font-semibold text-sm mb-2">
                    {item.title}
                  </p>

                  <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    {item.heading}
                  </h5>

                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
