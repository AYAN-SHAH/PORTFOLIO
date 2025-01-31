"use client";

import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import { motion } from "framer-motion";
import WordRotate from "@/components/ui/word-rotate";
import TextParallex from "@/components/TextParallex";
import Page from "@/components/page";
import Work from "../components/Work";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { projects } from "../dataind";
import Card from "../components/CardInd";
// Define container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

// Define text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const nameVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Head>
        <title>AYAN-PORTFOLIO HOME</title>
        <meta
          name="description"
          content=" full-stack developer with over a decade of experience, specializing in creating impactful digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page background="#F7F2F2" className="bg-[#F7F2F2]">
        <div className="">
          {/* Hero Section */}
          <section
            className="h-[100vh] bg-[#F7F2F2] flex items-center flex-col justify-end  top-0 z-10 pl-[20px] md:pl-[0px]"
            style={{ padding: "0 0 0 0px" }}
          >
            {/* section 1 */}
            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-[#1C1C1C] absolute top-0 left-0 text-[500]
                                  pt-[40px] pl-[18px] md:pl-[38px]"
              style={{
                // fontWeight: "lighter",
                fontSize: "26px",
                // padding: "40px 0 0px 40px",
              }}
            >
              AYAN SHAH
            </motion.h1>

            <div className="container mx-auto - m  flex items-end  bg--900 w- h- pb-6 md:pb-12 px-4 md:px-0 ">
              <div className="text-left">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="overflow-hidden"
                >
                  <motion.h1
                    variants={textVariants}
                    className="text-5xl md:text-[120px] font-[500] text-[] leading-none"
                  >
                    CREATIVE DEVELOPER
                  </motion.h1>
                  <motion.h1
                    variants={textVariants}
                    className="text-5xl md:text-[120px] font-[500] text-[] leading-none"
                  >
                    SPECIALIZING IN
                  </motion.h1>
                  <motion.div variants={textVariants}>
                    <WordRotate
                      className="text-5xl md:text-[120px] font-[500] text-[#1C1C1C] leading-none
                       "
                      words={["WEB DEVELOPER", "MOB DEVELOPER"]}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <section className="flex px-4 md:px-12  items-center h-8 justify-between bg--100 mb-10 md:mb-6  rounded-lg w-full mx-auto ">
              <div className="text-sm font-light text-gray-700 mr-2 tracking">
                London, UK
              </div>

              <div className="flex-grow border-t border-gray-300 mx-2"></div>

              <div className="text-sm font-light text-gray-700 mx-2">
                CET (GMT +1)
              </div>

              <div className="flex-grow border-t border-gray-300 mx-2"></div>

              <div className="flex items-center ml-2">
                <motion.div
                  className="w-3 h-3 border-4 border-green-500 rounded-full mr-2"
                  initial={{ rotateY: 0 }}
                  whileInView={{ rotateY: 360 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: 1,
                    ease: "linear",
                  }}
                />
                <span className="text-sm font-light text-green-600">
                  AVAILABLE
                </span>
              </div>
            </section>
          </section>

          <section className=" mx-auto 2xl:container bg- flex flex-col  items-start justify-start relative z-20   overflow-hidden">
            {/* Section 2 */}
            <div className="py- md:py-10 pt-24 md:pt-36">
              <TextParallex />
            </div>
            <div className="w-full tracking-widest mx-auto mt-14">
              <div className="flex flex-col items-center py-16 bg- text-[#1C1C1C]">
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-10">
                  About Me
                </h2>
                <p className="text-4xl px-6 md:px-0 md:text-6xl text-center uppercase mb-10 w-[100vw] md:w-[70vw] leading-none ">
                  I'm Ayan, a full-stack developer passionate about building
                  dynamic web apps. Let's create something amazing together!"
                </p>
                <a
                  href="#about-me"
                  className="text-2xl font-semibold uppercase tracking-widest hover:underline py-2 pb-6"
                >
                  More About Me
                </a>
              </div>
            </div>
          </section>

          <section className="bg- flex flex-col y- items- justify-center   z-30  overflow-hidden py-28 container mx-auto px-0 md:px-0 text-[#1C1C1C]">
            {/* Section 3 */}

            <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-8 md:mb-16 gap-1 md:gap-6 px-4 md:px-0">
              <h1
                className="text-[42px] md:text-5xl lg:text-[4.8rem] font- tracking-wide leading-tight uppercase text-[]"
                // Custom font for heading
              >
                featured
                <br />
                projects
              </h1>
              <p
                className="text-lg md:text-2xl max-w-md text-gray-950"
                style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
              >
                Explore my portfolio showcasing innovative and impactful designs
                across various industries.
              </p>
            </div>
            <hr className="border-t-2 bg-black border-black mx-4 md:px-0" />

            <Work />
          </section>
          <section className="bg-[#F7F2F2] mb-20  z-40 container mx-auto text-[#1C1C1C]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-1 md:gap-6 px-4 md:px-0">
              <h1
                className="text-[42px] md:text-5xl lg:text-[4.8rem] font- tracking-wide leading-tight uppercase"
                // Custom font for heading
              >
                what our
                <br />
                clients say
              </h1>
              <p
                className="text-lg md:text-2xl max-w-md text-gray-950"
                style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
              >
                See why myclients trust me. Read testimonials that illustrate my
                expertise, reliability, and the positive outcomes of my
                collaborative projects.
              </p>
            </div>
            <hr className="border-t-2 bg-black border-black mx-4 md:mx-0 mb-0 md:mb-6" />

            <section ref={container}>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <Card
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </section>
          </section>
        </div>
      </Page>
    </>
  );
}
