"use client";
import { useScroll, useTransform, motion } from "framer-motion";
// import Picture1 from '../../public/images/1.jpg'
// import Picture2 from '../../public/images/2.jpg'
// import Picture3 from '../../public/images/3.jpg'
import Lenis from "lenis";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="h" />
      <div ref={container}>
        <Slide
          src=""
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />
        <Slide
          src=""
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        {/* <Slide
          src=""
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        /> */}
      </div>
      <div className="h-" />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      {/* <div className="px-5 flex gap-5 items-center">
        <p className="text-[7.5vw]">Front End Developer</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{ objectFit: "cover" }} src="" alt="image" fill />
        </span>
      </div> */}
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="px-5 text-[#1C1C1C] flex gap-5 items-center">
      <h2 className="text-[7.5rem] md:text-[12rem] leading-[1] md:leading-[1.1]">
        WEB DEVELOPER ·
      </h2>
      {/* <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">.......
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span> */}
    </div>
  );
};
