"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduct } from "../home/Projcet";
import Loading from "@/app/loading";

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState<IProduct>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/api/projcet/${id}`
        );
        const result = await res.json();
        setProject(result.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!project) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-600 py-20  ">
      <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={project.imgOne}
            alt="image"
            width={900}
            height={700}
            className="rounded-xl shadow-lg h-[400px] "
          />
        </div>
        <div>
          <h2 className="text-green-500 font-semibold"> {project.title} </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {project.project_name}
          </h1>
          <p className="text-gray-300 mb-4 leading-relaxed">{project.about}</p>

          <h3 className="text-green-400 font-semibold mb-2">Technology used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <p className="px-1 py-1 text-lg rounded-full  text-gray-200">
              {project.technology}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.live_link}
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🌐 VIEW LIVE
            </a>
            <a
              href={project.github_link_clint}
              target="_blank"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🚀 CLIENT CODE
            </a>
            <a
              href={project.github_link_server}
              target="_blank"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🚀 SERVER CODE
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-white p-6 max-w-6xl  mx-auto container items-center">
        <h1 className="text-3xl text-green-500 font-medium mb-3">
          Description
        </h1>
        <p className="mb-5 text-white ">{project.description}</p>
        <h2 className="text-3xl text-green-500 font-medium mb-3">Features</h2>
        <p>{project.future_one} </p>
        <p>{project.future_tow}</p>
        <p>{project.future_three}</p>
        <p>{project.future_four}</p>
      </div>
    </div>
  );
}
