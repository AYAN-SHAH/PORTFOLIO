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
          //   top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-4xl md:text-[4.8rem] uppercase pt-4 md:pt-0">
            {title}
          </h2>
          <h2 className="text-[4.8rem] uppercase hidden md:block">
            {titleNum}
          </h2>
        </div>
        <hr className="border-t-2 bg-black border-black my-4 mb-6" />

        <div className={styles.body}>
          <div className={styles.description}>
            <p
              className="text-xl md:text-3xl my-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}
            </p>
            <div
              className="grid grid-cols-2 py-4 text- md:text-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {(tags || []).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg text--800 text- font-  py-2 pb-4"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
