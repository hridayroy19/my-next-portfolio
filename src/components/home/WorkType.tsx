"use client";

import dynamic from "next/dynamic";
import animation from "../../../public/animationIcon/Computer.json";
import { motion } from "framer-motion";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const WorksType = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const services = [
    {
      id: "01",
      name: "Full Stack Developer",
      description:
        "Building complete, scalable web applications from frontend to backend. I design intuitive user interfaces, develop secure server-side logic, manage databases efficiently, and deliver end-to-end solutions focused on performance, scalability, and real-world business needs.",
    },
    {
      id: "02",
      name: "Next.js Developer",
      description:
        "Developing fast, SEO-friendly, and production-ready web applications using Next.js. I specialize in server-side rendering, static site generation, API routes, and optimized performance to create modern, user-focused digital experiences.",
    },
    {
      id: "03",
      name: "MERN Stack Developer",
      description:
        "Creating full-featured web applications using MongoDB, Express.js, React, and Node.js. From interactive frontend interfaces to robust backend APIs, I deliver high-performance, secure, and scalable MERN stack solutions.",
    },
  ];

  return (
    <div className="bg-[#0e1423]/90">
      <section
        id="work"
        className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center uppercase mb-12 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
        >
          What I Do
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[450px]">
              <Lottie options={defaultOptions} />
            </div>
          </div>

          {/* Services Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="
      px-6 py-6
      rounded-xl
      shadow-lg shadow-cyan-500/40
      bg-[#0e1423]
      text-center
    "
              >
                <h4 className="font-semibold text-xl sm:text-2xl text-yellow-500 mb-3">
                  {item.name}
                </h4>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksType;
