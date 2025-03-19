"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface IProduct {
  id: number;
  projcet_name: string;
  title: string;
  about: string;
  imgOne: string;
  technology: string;
  github_link_clint: string;
  github_link_server: string;
  live_link: string;
}

const Project = () => {
  const [projectData, setProjectData] = useState<IProduct[]>([]);
  // console.log(projectData);

  useEffect(() => {
    fetch("/projcet.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching JSON file:", error));
  }, []);

  return (
    <div className="lg:py-20 py-10 text-white xl:px-24 md:px-6 px-4">
      <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl mb-20">
        My Projcet
      </h1>
      <div className="grid xl:grid-cols-3 gap-11 lg:grid-cols-2 md:grid-cols-2 ">
        {projectData.map((data) => (
          <div
            key={data?.id}
            className="rounded-lg overflow-hidden border border-gray-700 mb-6"
          >
            {/* Project Image */}
            <Image
              width={300}
              height={300}
              src={data?.imgOne?.trimStart()} // trims leading spaces
              alt="Project Thumbnail"
              className="w-full h-[220px] object-cover"
            />

            {/* Project Details */}
            <div className="mt-4 px-3 py-4">
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-gray-400 text-sm">Duration: 1 Month</p>
              <p className="text-gray-300 mt-2 text-sm">{data.about}...</p>

              {/* Details Button */}
              <div className="flex mt-5 items-center gap-4 text-3xl">
                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-4 font-medium uppercase overflow-hidden transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-y-0 before:bg-[#063970] before:transition-transform before:duration-300 before:origin-bottom before:content-[''] hover:text-white before:hover:scale-y-100">
                  <a href={data?.live_link} target="_blank">
                    Live
                  </a>
                </button>
                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-2 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#2596be] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                  <Link href={data?.github_link_clint}> Clint </Link>
                </button>
                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-4 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#063970] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">
                  <Link href={data?.github_link_clint}> Server </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
