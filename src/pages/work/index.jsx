"use client";

import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import { motion } from "framer-motion";
import WordRotate from "@/components/ui/word-rotate";
import TextParallex from "@/components/TextParallex";
import Page from "@/components/page";
import Work from "../../components/Work";
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
  return (
    <>
      <Head>
        <title>WORK AYAN-PORTFOLIO </title>
        <meta
          name="description"
          content=" full-stack developer with over a decade of experience, specializing in creating impactful digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page background="#F7F2F2" className="bg-[#F7F2F2] ">
        <div className="rounded-b-2xl container mx-auto">
          {/* Hero Section */}
          <section
            className=" h-[52vh] md:h-[100vh] bg-[#F7F2F2] flex items-center flex-col justify-end  top-0 z-10 pl-[16px] md:pl-[0px]"
            // style={{ padding: "0 0 0 px" }}
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

            <div className="container mx-auto - md:mb-28  flex items-end bg--900 w-full h-full pb-12 md:pb-0">
              <div className="text-left">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="overflow-hidden "
                >
                  <motion.h1
                    variants={textVariants}
                    className="text-5xl md:text-[120px] font-[500] text-[#1C1C1C] leading-none"
                  >
                    CRAFTING WORKS
                  </motion.h1>
                  <motion.h1
                    variants={textVariants}
                    className=" text-5xl md:text-[120px] font-[500] text-[#1C1C1C] leading-none"
                  >
                    THAT STAND OUT
                  </motion.h1>
                </motion.div>
              </div>
            </div>
          </section>
          <section>
            <Work />
          </section>
        </div>
      </Page>
    </>
  );
}
