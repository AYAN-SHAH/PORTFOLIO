"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  titleNum,
  tags,
  description,
  image,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={`${styles.cardContainer} px-4 md:px-0`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
        }}
        className={`${styles.card} flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-lg`}
      >
        <div className="md:hidden w-full h-1/2 md:w-[42%]  md:h-full rounded- overflow-hidden flex-shrink-0 relative">
          {/* <img
            src="/images/8L1yUdCuqlFNrZ4wliHCDhC3Rs.png"
            alt=""
            className="absolute z-50 top-4 right-0 w-28 h-7 "
          /> */}
          <img
            src={image}
            alt="testimonial"
            className="w-full h-full object-cover rounded-3xl"
            // style={{
            //   clipPath:
            //     "polygon(0% 15%, 0 0, 15% 0%, 75% 0, 75% 15%, 100% 15%, 100% 89%, 100% 100%, 89% 100%, 15% 100%, 0 100%, 0% 85%)",
            // }}
          />
        </div>
        <div className="flex flex-col md:w-1/2 text-center md: text-[#1C1C1C] ">
          <div className="hidden text-7xl md:text-8xl font- mb-0 leading-none text-">
            &#8220;
          </div>
          <p
            className="text-xl md:text-3xl text--700 font-light leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>
          <div className="mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-">
              {title}
            </h3>
            <p className="text- md:text-lg text--500">{titleNum}</p>
          </div>
        </div>
        <div className="hidden md:flex w-24 h-24 md:w-[42%]  md:h-full rounded- overflow-hidden flex-shrink-0 relative">
          {/* <img
            src="/images/8L1yUdCuqlFNrZ4wliHCDhC3Rs.png"
            alt=""
            className="absolute z-50 top-4 right-0 w-28 h-7 "
          /> */}
          <img
            src={image}
            alt="testimonial"
            className="w-full h-full object-cover rounded-3xl"
            // style={{
            //   clipPath:
            //     "polygon(0% 15%, 0 0, 15% 0%, 75% 0, 75% 15%, 100% 15%, 100% 89%, 100% 100%, 89% 100%, 15% 100%, 0 100%, 0% 85%)",
            // }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
