import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-[#F7F2F2]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[#F7F2F2] text-[#1C1C1C]"
    >
      <div className="sticky top-2 flex h-screen items-end overflow-hidden ">
        <div className="flex flex-col md:flex-col md:items- w-[100vw] justify-between mb-16 gap-6 px-4 md:px-12 absolute top-6 md:top-0">
          <div className="flex justify-between flex-col  md:flex-row ">
            <h1
              className="text-[42px] md:text-5xl lg:text-[4.9rem] font- tracking-wide leading-tight uppercase"
              // Custom font for heading
            >
              MY process
            </h1>
            <p
              className="text-lg md:text-2xl max-w-md text-gray-950"
              style={{ fontFamily: "'Inter', sans-serif" }} // Custom font for paragraph
            >
              The steps I typically follow when collaborating on projects with
              clients.
            </p>
          </div>
          <hr className="border-t-2 bg-black border-black my-3 md:my-6" />
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-36 md:gap-56 mb-12 md:mb-4"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[420px] w-[100vw] md:w-[600px] rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col justify-between mb-"
    >
      <h2 className="text-4xl md:text-6xl p-5 pt-6  md:p-10 ">
        {card.cardNum}
      </h2>
      <div className="flex flex-col gap-3 ">
        <div className=" ">
          <h1 className=" text-4xl md:text-6xl px-5 md:px-10 uppercase">
            {card.title}
          </h1>
        </div>
        <div>
          <p
            className="text-lg md:text-xl px-5 md:px-10 pb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {card.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    cardNum: "01",
    title: "request project",
    summary:
      "We begin by receiving your project request and gathering initial details about your vision, goals, and requirements",
    id: 1,
  },
  {
    cardNum: "02",
    title: "strategy session",
    summary:
      "Our creative team formulates and evolves design concepts that harmonize with your brand and project goals",
    id: 2,
  },
  {
    cardNum: "03",
    title: "DESIGN",
    summary:
      "Using the approved concept, we create detailed and polished designs, ensuring every element is meticulously crafted",
    id: 3,
  },
  {
    cardNum: "04",
    title: "Feedback",
    summary:
      "We present the designs for your review and make necessary revisions based on your feedback to perfect the final product",
    id: 4,
  },
  {
    cardNum: "05",
    title: "Final Delivery",
    summary:
      "After approval, we deliver the final designs in the required formats and provide ongoing support to ensure your satisfaction",
    id: 5,
  },
];
