import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { bookServices } from "../assets/assets";
import Seo from "../components/Seo";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Your session has been booked successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <>
      <Seo
        title="Book a Session | FitnessPro"
        description="Schedule your fitness session with certified trainers at FitnessPro. Take the first step towards a stronger, healthier, and more confident you."
      />

      <Breadcrumb top="Book Your Session" bottom="Booking" />
      <section className="px-3 sm:px-6 pt-15 pb-20" data-aos="fade-up">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-center font-bold mb-1 text-gray-900">
            Reserve Your <span className="text-green-600">Fitness Slot</span>
          </h2>

          <p className="text-gray-600 max-w-2xl text-left sm:text-center sm:mx-auto sm:text-lg mt-2">
            Transform your goals into action. Secure your slot with a certified
            trainer and take the first step toward a healthier, stronger you.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          className="sm:px-2 max-w-7xl sm:max-w-6xl md:max-w-5xl mx-auto"
          data-aos="fade-left"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 placeholder-gray-400 
              bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 placeholder-gray-400 
              bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 placeholder-gray-400 
              bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 text-gray-900 
              focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                >
                  <option value="">Choose a service</option>
                  {bookServices.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-gray-50
              focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-800 font-medium text-lg">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-gray-50
              focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-800 font-medium text-lg">
                Message (Optional)
              </label>
              <textarea
                name="message"
                placeholder="Add additional details..."
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 border border-gray-300 rounded-xl p-4 text-gray-900 bg-gray-50
            placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-2/4 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl 
          shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
