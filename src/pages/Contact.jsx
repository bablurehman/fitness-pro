import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { contactItems } from "../assets/assets";
import Seo from "../components/Seo";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Seo
        title="Contact Us | FitnessPro"
        description="Get in touch with FitnessPro for inquiries, consultations, or support. Start your fitness journey today with our expert guidance."
      />

      <Breadcrumb top="Contact Us" bottom="Contact" />

      <section className="px-3 sm:px-5 pt-15" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900">
          Get in Touch with <span className="text-green-500">Our Team</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto sm:text-lg mt-1">
          We’d love to hear from you! Whether you’re curious about our services,
          have feedback, or need assistance — our team is here to help.
        </p>

        <div className="container mx-auto max-w-5xl z-10 pt-15">
          <div className="contact-main grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 items-start lg:items-stretch ">
            {/* Left: Form */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="contact-left flex flex-col h-full justify-start"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-left">
                Let’s Connect
              </h3>

              <p className="text-gray-600  max-w-md leading-relaxed mb-3">
                Have questions or want to collaborate? Fill out the form and our
                team will reach out soon.
              </p>

              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="form-input grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-gray-700 font-medium text-sm md:text-base"
                      >
                        Your Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="p-3 border border-gray-400 rounded-xl text-gray-700 placeholder-gray-400 
                   focus:outline-none focus:ring-1 focus:ring-green-500 transition"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-gray-700 font-medium text-sm md:text-base"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@gmail.com"
                        className="p-3 border border-gray-400 rounded-xl text-gray-700 placeholder-gray-400 
                   focus:outline-none focus:ring-1 focus:ring-green-500 transition"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-gray-700 font-medium text-sm md:text-base"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows="4"
                      className="p-3 border border-gray-400 rounded-xl text-gray-700 placeholder-gray-400 
                 focus:outline-none focus:ring-1 focus:ring-green-500 transition resize-none"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md 
               hover:bg-green-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div
              className="contact-right flex flex-col gap-8 bg-gray-100 shadow-xl rounded-xl px-5 pt-5 pb-10"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Contact Information
              </h3>

              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <div
                    className="bg-green-100 hover:bg-green-100 border border-gray-300 p-3 rounded-full text-green-500 text-xl md:text-2xl 
                   group-hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className=" sm:text-lg font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ GOOGLE MAP SECTION */}
      <section className="px-5 py-15 max-w-7xl sm:max-w-6xl mx-auto">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.646391269732!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630fd2a5cf1%3A0x18b94b9b3d7c7f4f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635878256893!5m2!1sen!2sin"
          width="100%"
          // height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded h-60 sm:h-80"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
