"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import okay from "../../../public/animationIcon/Okey.json";
import Image from "next/image";
import { ITechnology } from "@/type";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Skills = ({ technology }: { technology: ITechnology[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  if (!technology) {
    return <p>Loading ...</p>;
  }

  // console.log(technology, "skill data");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" xl:px-5 px-1">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 text-white w-full mx-auto px-4 md:px-8">
        {/* Tech Stack Section */}
        <div className="flex-1 xl:mb-8 lg:mb-0">
          <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl mb-10">
            Tech Stack
          </h1>
          <div className="p-6">
            <div className="flex flex-wrap justify-center gap-6">
              {technology?.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md max-w-[120px] sm:max-w-[150px]"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="object-contain w-[50px] h-[40px]"
                  />
                  <p className="text-black font-semibold mt-2 text-center text-sm lg:text-base">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex-1 flex justify-center mt-5 lg:mt-0">
          <div className="w-full max-w-[400px] lg:max-w-[500px]">
            {isClient && (
              <Lottie options={defaultOptions} width="100%" height="100%" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
