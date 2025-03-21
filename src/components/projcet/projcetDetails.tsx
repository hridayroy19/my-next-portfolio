"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IProduct } from "../home/Projcet";
import Loading from "../ui/loading";

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
    <div className="bg-gray-600 py-20 h-screen ">
      <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={project.imgOne}
            alt="image"
            width={900}
            height={500}
            className="rounded-xl shadow-lg"
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
    </div>
  );
}
