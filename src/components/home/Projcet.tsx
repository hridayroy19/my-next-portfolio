"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  future_one: string;
  future_tow: string;
  future_three: string;
  future_four: string;
  description: string;
}

const Project = ({ projects }: { projects: IProduct[] }) => {
  if (!projects || projects.length === 0) {
    return <Loading />;
  }

  return (
    <section
      id="projects"
      className="py-14 px-4 sm:px-6 md:px-10 xl:px-20 bg-[#0e1423]/90 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center uppercase font-bold text-3xl sm:text-4xl lg:text-5xl mb-16 tracking-widest"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                overflow-hidden
                hover:border-cyan-400/60
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.imgOne}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="
                    w-full h-[220px] object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.about}
                </p>

                {/* Tech */}
                <p className="text-xs text-cyan-400 tracking-wide">
                  {project.technology}
                </p>

                {/* Actions */}
                <div className="flex gap-4 mt-4">
                  <Link
                    href={`/projcets/${project._id}`}
                    className="
                      text-sm px-4 py-2
                      border border-cyan-400/60
                      text-cyan-300
                      rounded-md
                      hover:bg-cyan-400 hover:text-black
                      transition
                    "
                  >
                    Details
                  </Link>

                  <a
                    href={project.github_link_clint}
                    target="_blank"
                    className="
                      text-sm px-4 py-2
                      border border-gray-500
                      text-gray-300
                      rounded-md
                      hover:border-cyan-400
                      hover:text-cyan-400
                      transition
                    "
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
