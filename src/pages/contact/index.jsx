"use client";

import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import { motion } from "framer-motion";
import Page from "@/components/page";
import FAQSection from "@/components/Faqs";
import { useState } from "react";
import emailjs from '@emailjs/browser';
// Define animation variants
const nameVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { name, email, message } = formData;
    
    try {
      // Send email directly using EmailJS
      const result = await emailjs.send(
        'service_9ikxyb9', // Your EmailJS service ID
        'template_h2axqj9', // Your EmailJS template ID
        {
          name: name,
          email: email,
          message: `Email: ${email}\n\nMessage:\n${message}`,
          time: new Date().toLocaleString(),
        },
        'n9Ux7Dz4iIoXggxUT' // Your EmailJS public key
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/download-modified.png" />

        {/* Include Inter font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page backgroundColor={"#F7F2F2"}>
        {/* Name Section */}
        {/* <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-orange-400"
          style={{
            fontWeight: "lighter",
            fontSize: "26px",
            padding: "40px 0 0px 40px",
          }}
        >
          AYAN SHAH
        </motion.h1> */}

        {/* Contact Section */}
        <section className="bg-[#F7F2F2] flex flex-col md:flex-row justify-center mx-auto container items-start px-4 md:px-8 lg:px-16 pt-20">
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8, // Animation duration
              delay: 0.2, // Delay before starting
              ease: "easeOut", // Easing function
            }}
            className="text-[#1C1C1C] absolute top-0 left-0 pt-[40px] pl-[16px] md:pl-[40px]"
            style={{
              fontWeight: "lighter",
              fontSize: "26px",
              // padding: "40px 0 0px 40px",
            }}
          >
            AYAN SHAH
          </motion.h1>
          <div className="flex justify-between w-full items-start flex-col md:flex-row py-20 text-[#1C1C1C]">
            <div className="flex-col md:flex-row flex w- mx-auto justify-between w- container px-4 md:px-8 lg:px-16">
              {/* Left Section */}
              <div className="flex-1 md:w-1/2 space-y-3 md:space-y-6 pr-4 md:pr-8">
                <h1 className="text-[#1C1C1C] text-5xl md:text-7xl font- tracking-wide">
                  LET'S GET IN TOUCH
                </h1>
                <p
                  className="text-gray-800 text-lg md:text-2xl pr-12 "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Reach out through the form, and I'll respond within the next
                  24 hours.
                </p>

                <div className="pt-2 md:pt-0">
                  <h3
                    className="text-gray-800 text- md:text-xl font-semibold"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Write to Us
                  </h3>
                  <p
                    className="text-gray-900 text-lg md:text-2xl"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    aayanshah066@gmail.com
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="md:w-1/2 w-full mt-10 md:mt-0 bg-white shadow-lg rounded-xl p-6 md:p-8 lg:p-10 ml-0 md:ml-8">
                <h3
                  className="text-black text-lg font-semibold mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Send Message
                </h3>
                <form
                  className="space-y-7"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="text-gray-500 text-sm font-medium "
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 bg-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-[#F7F2F2] shadow-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-500 text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 bg-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-[#F7F2F2] shadow-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-gray-500 text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 bg-none rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-[#F7F2F2] shadow-sm"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-950 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm mt-2">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm mt-2">
                      There was an error sending your message. Please try again or email directly at aayanshah066@gmail.com
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <FAQSection />
        </section>
      </Page>
    </>
  );
}
