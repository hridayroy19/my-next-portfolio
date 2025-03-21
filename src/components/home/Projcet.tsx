"use client";
import Image from "next/image";
import Link from "next/link";
import Loading from "../ui/loading";

export interface IProduct {
  _id: string;
  project_name: string;
  title: string;
  about: string;
  imgOne: string;
  technology: string;
  github_link_clint: string;
  github_link_server: string;
  live_link: string;
}

const Project = ({ projects }: { projects: IProduct[] }) => {
  if (!projects) {
    return <Loading />;
  }
  return (
    <div className="lg:py-20 py-10 text-white xl:px-24 md:px-6 px-4">
      <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl mb-20">
        My Projects
      </h1>
      <div className="grid xl:grid-cols-3 gap-11 lg:grid-cols-2 md:grid-cols-2 ">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-lg overflow-hidden border border-gray-700 mb-6"
          >
            {/* Project Image */}
            <Image
              width={300}
              height={300}
              src={project.imgOne}
              alt="Project Thumbnail"
              className="w-full h-[220px] object-cover"
            />

            {/* Project Details */}
            <div className="mt-4 px-3 py-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">Duration: 1 Month</p>
              <p className="text-gray-300 mt-2 text-sm">{project.about}</p>

              {/* Details Button */}
              <div className="flex mt-5 items-center gap-4 text-3xl">
                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-2 font-medium uppercase">
                  <Link href={`/projects/${project?._id}`}>Details</Link>
                </button>

                <button className="relative text-sm border-2 border-cyan-500 bg-transparent py-1 px-2 font-medium uppercase">
                  <a href={project?.github_link_clint} target="_blank">
                    Live
                  </a>
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
