import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      title: "Ongoing Project",
      description:
        "An exciting new project currently in development. This innovative solution showcases cutting-edge technology and modern design principles.",
      tags: ["In Development", "Web Development", "UI / UX Design"],
      video: "/images/vid.mp4",
    },
    {
      title: "EarnPay Mobile",
      description:
        "A comprehensive mobile application for EarnPay, featuring intuitive user interface design and seamless payment processing functionality.",
      tags: ["Mobile Development", "UI / UX Design", "Payment Integration"],
      image: "/images/earnpay-mobile.jpeg",
      link: "https://drive.google.com/drive/folders/1toTJ3jPI3vXDLAjFXXaIUB6oSkhulnHm",
    },
    {
      title: "EarnPay Admin",
      description:
        "Administrative dashboard for EarnPay with advanced analytics, user management, and comprehensive business insights.",
      tags: ["Web Development", "Admin Dashboard", "Analytics"],
      image: "/images/earnpay-admin.png",
      link: "https://earnpay-27725.web.app/",
    },
    {
      title: "SmartSale",
      description:
        "A comprehensive e-commerce platform with advanced features including inventory management, sales analytics, and seamless customer experience.",
      tags: ["E-commerce", "Web Development", "UI / UX Design"],
      image: "/images/smartsale.jpeg",
      link: "https://zeb.smartestdevelopers.com/apk/SmartSale.apk",
    },
    {
      title: "School Management System",
      description:
        "A comprehensive school management platform with student portal, admin dashboard, and educational tools for modern educational institutions.",
      tags: ["Web Development", "Education", "Management System"],
      image: "/images/school.png",
      link: "https://school.smartestdevelopers.com/login",
    },
    {
      title: "Smartest Devs",
      description:
        "The main website for Smartest Devs organization, showcasing our development services, team expertise, and innovative solutions for clients worldwide.",
      tags: ["Web Development", "Organization Website", "UI / UX Design"],
      image: "/images/sds.png",
      link: "https://smartestdevelopers.com/",
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
                {project.video ? (
                  <>
                    {/* Video background */}
                    <video
                      src={project.video}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-sm scale-110 opacity-30"
                      muted
                      loop
                      autoPlay
                    />
                    {/* Main video */}
                    <video
                      src={project.video}
                      className="relative w-full h-full object-contain rounded-2xl transform transition-transform duration-300 group-hover:scale-105 z-10"
                      muted
                      loop
                      autoPlay
                      controls
                    />
                  </>
                ) : (
                  <>
                    {/* Blurred background image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-sm scale-110 opacity-30"
                    />
                    {/* Main image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-full object-contain rounded-2xl transform transition-transform duration-300 group-hover:scale-105 z-10"
                    />
                  </>
                )}
                {/* Clickable overlay for projects with links */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 cursor-pointer"
                    aria-label={`View ${project.title} project`}
                  />
                )}
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
