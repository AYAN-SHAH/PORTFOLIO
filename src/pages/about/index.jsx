"use client";

import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import { motion } from "framer-motion";
import WordRotate from "@/components/ui/word-rotate";
import TextParallex from "@/components/TextParallexAbout";
import Page from "@/components/page";
import Work from "../../components/Work";
import Paragraph from "@/components/Paragraph";
import Card from "@/components/Card";
import { projects } from "@/data";
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import ProcessSection from "@/components/ProcessSection";
import Marquee from "@/components/Marquee";
import SkillsShowcase from "@/components/SkillsShowcase";
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
        <title>ABOUT US </title>
        <meta
          name="description"
          content="full-stack developer with over a decade of experience, specializing in creating impactful digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/download-modified.png" />
      </Head>
      <Page background="#F7F2F2" className="bg-[#F7F2F2] ">
        <div className="rounded-b-2xl  mx-auto">
          {/* Hero Section */}
          <section
            className=" bg-[#F7F2F2] flex items-center flex-col justify-end relative  top-0 z-[50]  md:pl-[0px] rounded-b-3xl 
            
             min-h-[400px] md:h-[100vh]     pl-[16px] 

            "
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
              className="text-[#1C1C1C] absolute top-0 left-0 
                        pt-[40px] pl-[18px] md:pl-[38px]"
              style={{
                fontWeight: "lighter",
                fontSize: "26px",
                // padding: "40px 0 0px 40px",
              }}
            >
              AYAN SHAH
            </motion.h1>

            <div className="container mx-auto - md:mb-28  flex items-end bg--900 w- h- pb-12 px-4 md:px-0 md:pb-0">
              <div className="text-left">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="overflow-hidden "
                >
                  <motion.h1
                    variants={textVariants}
                    className="text-5xl md:text-[120px] font-[500] text-[#1C1C1C] leading-none uppercase"
                  >
                    Your partner for
                  </motion.h1>
                  <motion.h1
                    variants={textVariants}
                    className=" text-5xl md:text-[120px] font-[500] text-[#1C1C1C] leading-none uppercase"
                  >
                    digital experiences
                  </motion.h1>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="relative bg-[#1C1C1C] bg-cover bg-center bg-no-repeat flex flex-col justify-end md:justify-start h-[60vh] md:h-screen -mt-6 -mb-6 pt-6 ">
            <div className="absolute inset-0 bg-[#1C1C1C] bg-opacity-0"></div>
            <Paragraph
              paragraph="I specialize in creating impactful digital experiences that connect businesses with their audience. By focusing on innovation, user-centric design, and streamlined solutions, I help brands grow, achieve their goals, and build lasting relationships with their customers.

"
            />

            <SkillsShowcase />
          </section>

          <section className=" rounded-t-3xl  relative z-[50] bg--900">
            <div className="py-12 md:py-24 pt-20 md:pt-36">
              <TextParallex />
            </div>
            <div
              className="w-full md:w-3/5 mx-auto text-center text-xl  md:text-3xl flex flex-col gap-9 mb-28 md:mb-56 px-4 md:px-0 text-[#1C1C1C]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p>
                I specialize in designing impactful digital experiences that not
                only meet but exceed expectations. Through a collaborative
                approach, I work closely with clients, engaging in workshops and
                thoughtful discussions to bring their unique vision to life.
              </p>
              <p>
                With over a decade of experience, I’ve had the privilege of
                partnering with startups and industry giants alike, creating
                innovative solutions and memorable brands that leave a lasting
                impression. My expertise lies in seamlessly integrating
                technical skills with a deep understanding of user-centric
                design and compelling storytelling.
              </p>
              <p>
                Driven by a passion for digital innovation, I continually strive
                to push the limits of creativity and adopt the latest
                technologies to deliver exceptional value and lasting impact.
              </p>
            </div>
          </section>
          <section className="bg-[#F7F2F2] mb-20 text-[#1C1C1C]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-1 md:gap-6 px-4 md:px-12">
              <h1
                className="text-[42px] md:text-5xl lg:text-[4.8rem] font- tracking-wide leading-tight uppercase"
                // Custom font for heading
              >
                what I can
                <br />
                do for you
              </h1>
              <p
                className="text-lg md:text-2xl max-w-md text-gray-950"
                style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
              >
                Experience my comprehensive suite of creative services crafted
                to elevate your brand and captivate your audience
              </p>
            </div>
            <hr className="border-t-2 bg-black border-black mx-4 md:mx-12 mb-0 md:mb-6" />

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
          <section>
            <ProcessSection />
          </section>
          <div className="my-36">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 md:gap-6 px-4 md:px-12 text-[#1C1C1C]">
              <h1
                className="text-[42px] md:text-5xl lg:text-[4.8rem] font- tracking-wide leading-tight uppercase"
                // Custom font for heading
              >
                brands I've
                <br />
                worked with
              </h1>
              <p
                className="text-lg md:text-2xl max-w-md text-gray-950"
                style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
              >
                I’ve worked with some great companies over the years. Here's a
                selected few.
              </p>
            </div>
            <hr className="border-t-2 bg-black border-black mx-4 md:mx-12 mb-6" />

            <section className="  mx-auto w-full h- text-white flex justify-center items-center overflow-x-hidden bg-[#F7F2F2]">
              <Marquee />
            </section>
          </div>
        </div>
      </Page>
    </>
  );
}
