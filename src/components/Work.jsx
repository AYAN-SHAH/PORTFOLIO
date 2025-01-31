import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      title: "Elegant Pack",
      description:
        "Enhancing Elegant Pack's brand with a sophisticated identity and engaging digital platform for their premium cosmetic packaging solutions.",
      tags: ["Brand Identity", "Digital Design"],
      image:
        "https://framerusercontent.com/images/JcWCXSvTQOoBDbxmwA5ee8Nui4.jpg?scale-down-to=2048",
    },
    {
      title: "Radiant Glow",
      description:
        "Transforming RadiantGlow's brand and digital presence with refined brand identity, sophisticated UI/UX design, and robust web development.",
      tags: ["UI / UX Design", "Web Development", "Brand Identity"],
      image:
        "https://framerusercontent.com/images/JcWCXSvTQOoBDbxmwA5ee8Nui4.jpg?scale-down-to=2048",
    },
    {
      title: "Water Drops",
      description:
        "Enhancing Water Drops's digital presence with cutting-edge web development and captivating digital design.",
      tags: ["Web Development", "Digital Design"],
      image:
        "https://framerusercontent.com/images/JcWCXSvTQOoBDbxmwA5ee8Nui4.jpg?scale-down-to=2048",
    },
    {
      title: "Luxe Beauty",
      description:
        "Revolutionizing Luxe Beauty's online presence with cutting-edge web design and robust web development.",
      tags: ["UI / UX Design", "Web Development"],
      image:
        "https://framerusercontent.com/images/JcWCXSvTQOoBDbxmwA5ee8Nui4.jpg?scale-down-to=2048",
    },
  ];

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="md:py-16 relative bg-[#F7F2F2] py-10 text-[#1C1C1C] "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w- mx-auto px-4 sm:px-0 lg:px-0 pt-">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="rounded-2xl overflow-hidden group">
              <div
                className="relative overflow-hidden rounded-2xl h-[400px] md:h-[500px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[100%] object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-4 md:py-6">
                <h3 className=" text-4xl md:text-5xl font- mb-4 uppercase">
                  {project.title}
                </h3>
                <div
                  className="flex flex-wrap gap-3  mb-4 "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg- border border-black     text--800 text- font- px-3 py-1 md:py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="text--700 md:text-lg  "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed z-[100000] top-0 left-0 w-28 h-28 bg-gray-800 backdrop-blur-sm bg-opacity-10 rounded-full flex items-center justify-center pointer-events-none cursor-pointer"
            style={{
              x: cursorPosition.x - 55,
              y: cursorPosition.y - 55,
              boxShadow: "inset 0px 0px 8px 1px white",
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              x: cursorPosition.x - 55,
              y: cursorPosition.y - 55,
            }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              damping: 35,
              stiffness: 200,
              mass: 0.5,
            }}
          >
            <span className="text-white font-bold">View</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;
