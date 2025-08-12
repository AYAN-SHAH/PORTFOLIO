import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      title: "COLOR - Nightlife Platform",
      description:
        "A comprehensive nightlife and entertainment ecosystem with mobile app (Flutter), venue management portal (React), and superadmin portal. Features QR code check-ins, real-time analytics, and multi-platform integration.",
      tags: ["Flutter", "React", "Node.js", "MongoDB", "Firebase", "Real-time"],
      video: "/images/vid.mp4",
    },
    {
      title: "EarnPay Mobile",
      description:
        "Task-based earning platform built with Flutter. Features user authentication, task completion system (45-60 Rs per task), package purchases, balance management, and withdrawal processing to bank accounts.",
      tags: ["Flutter", "Firebase", "Provider", "Material Design", "Payment System"],
      image: "/images/earnpay-mobile.jpeg",
      link: "https://drive.google.com/drive/folders/1toTJ3jPI3vXDLAjFXXaIUB6oSkhulnHm",
    },
    {
      title: "EarnPay Admin",
      description:
        "React-based admin dashboard with TypeScript. Features task management, user management, submission review, withdrawal processing, and comprehensive analytics with Redux Toolkit and ApexCharts.",
      tags: ["React", "TypeScript", "Redux", "Firebase", "Admin Dashboard", "Analytics"],
      image: "/images/earnpay-admin.png",
      link: "https://earnpay-27725.web.app/",
    },
    {
      title: "SmartSale - Business Management",
      description:
        "Comprehensive POS and business management app built with React Native. Features sales management, inventory tracking, customer/supplier management, financial reporting, and invoice generation with Laravel backend.",
      tags: ["React Native", "Expo", "Laravel", "MySQL", "POS System", "Business Management"],
      image: "/images/smartsale.jpeg",
      link: "https://zeb.smartestdevelopers.com/apk/SmartSale.apk",
    },
    {
      title: "School Management System",
      description:
        "Comprehensive educational management platform featuring student management, teacher portals, class timetables, fee management, parent communication, and administrative tools for complete school operations.",
      tags: ["Web Development", "Education", "Management System", "Student Portal", "Fee Management"],
      image: "/images/school.png",
      link: "https://school.smartestdevelopers.com/login",
    },
    {
      title: "Smartest Devs",
      description:
        "Organization website built with Next.js showcasing development services, team expertise, and innovative solutions. Features modern web development practices and responsive design.",
      tags: ["Next.js", "React", "Organization Website", "UI / UX Design", "Web Development"],
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
                      preload="metadata"
                    />
                    {/* Main video */}
                    <video
                      src={project.video}
                      className="relative w-full h-full object-contain rounded-2xl transform transition-transform duration-300 group-hover:scale-105 z-10"
                      muted
                      loop
                      autoPlay
                      controls
                      preload="metadata"
                    />
                  </>
                ) : (
                  <>
                    {/* Blurred background image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-sm scale-110 opacity-30"
                    />
                    {/* Main image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
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
