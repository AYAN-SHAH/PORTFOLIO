"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I start a project with you?",
      answer:
        "First, you can reach out to me through the contact form or email. We'll schedule an initial meeting to discuss your needs and plan the project together.",
    },
    {
      question: "Do you provide free consultations?",
      answer:
        "Yes, we offer free initial consultations to discuss your project requirements and determine the best approach forward.",
    },
    {
      question: "How do you manage revisions?",
      answer:
        "We have a structured revision process that ensures clear communication and timely updates throughout the project lifecycle.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Turnaround time varies depending on the project scope. We provide estimated timelines during our initial consultation and keep you updated throughout the process.",
    },
  ];

  return (
    <div
      className="min-h-screen px-4 md:px-0 pt-8 container mx-auto text-[#1C1C1C]"
      style={{ backgroundColor: "#F7F2F2" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-1 md:gap-6">
          <h1
            className="text-[42px] md:text-5xl lg:text-[4.8rem] font- tracking-wide leading-tight"
            // Custom font for heading
          >
            QUESTIONS AND
            <br />
            ANSWERS
          </h1>
          <p
            className="text-lg md:text-2xl max-w-md text-gray-950"
            style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
          >
            Have questions? Check out our FAQ section for quick and helpful
            answers.
          </p>
        </div>
        <hr className="border-t-2 bg-black border-black" />

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-16 pb-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="bg-white rounded-xl p-8 shadow-md "
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left "
      >
        <span
          className="text-lg md:text-2xl font"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {question}
        </span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl font-medium ml-4"
        >
          {isOpen ? "−" : "+"}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <hr className="border-t border-black my-7" />
            <p
              className="text-gray-800 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
