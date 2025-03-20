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
            className="rounded-lg  overflow-hidden border border-gray-700 mb-6"
          >
            {/* Project Image */}
            <Image
              width={300}
              height={300}
              src={data?.imgOne?.trimStart()}
              alt="Project Thumbnail"
              className="w-full h-[220px] object-cover"
            />

            {/* Project Details */}
            <div className="mt-4 px-3 py-4">
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-gray-400 text-sm">Duration: 1 Month</p>
              <p className="text-gray-300 mt-2 text-sm">
                {data.about.split(" ").slice(0, 20).join(" ")}....
              </p>

              {/* Details Button */}
              <div className="flex   mt-5 items-center gap-4 text-3xl">
                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-2 font-medium uppercase   ">
                  <Link href={`/projcets/${data.id}`}>Details</Link>
                </button>

                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-2 font-medium uppercase">
                  <Link href={data?.github_link_clint}> Live </Link>
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
