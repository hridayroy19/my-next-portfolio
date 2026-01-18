"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import okay from "../../../public/animationIcon/Okey.json";
import { ITechnology } from "@/type";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Skills = ({ technology }: { technology: ITechnology[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!technology || technology.length === 0) {
    return (
      <section className="py-20 text-center text-gray-400">
        <p>Technologies are not available right now.</p>
      </section>
    );
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-[#0e1423]/90">
      <section
        id="skill"
        className="py-16 lg:py-10 px-4 sm:px-6 md:px-8 xl:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-center uppercase font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-5 tracking-widest">
            Tech Stack
          </h2>

          {/* Layout */}
          <div className="flex flex-col lg:flex-row items-end justify-between gap-14">
            {/* Skills Grid */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {technology.map((skill, index) => (
                  <div
                    key={index}
                    className="
                      group
                      bg-white/5
                      backdrop-blur-md
                      border border-white/10
                      rounded-lg
                      p-4
                      flex flex-col items-center justify-center
                      transition-all duration-300 ease-out
                      hover:-translate-y-1.5
                      hover:border-cyan-400/60
                      hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        mb-2
                        transition-transform duration-300
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className="w-[36px] h-[36px] object-contain"
                      />
                    </div>

                    {/* TEXT */}
                    <p className="text-gray-200 text-xs sm:text-sm font-medium tracking-wide text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lottie Animation */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[550px]">
                {isClient && (
                  <Lottie options={defaultOptions} width="100%" height="100%" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
