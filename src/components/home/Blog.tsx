"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "../ui/loading";

export interface IBlog {
  _id: string;
  name: string;
  publishedDate: string;
  image: string;
  description: string;
  practicality: string;
  accuracy: string;
  reliability: string;
  optimization: string;
  scalable: string;
}

const Blog = ({ blog }: { blog: IBlog[] }) => {
  if (!blog || blog.length === 0) {
    return <Loading />;
  }

  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 md:px-10 xl:px-20 bg-[#0e1423]/90 text-white"
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
          Blog
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blog.map((item, index) => (
            <motion.article
              key={item._id}
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
                  src={item.image}
                  alt={item.name}
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
                <span className="text-xs text-gray-400">
                  {item.publishedDate}
                </span>

                <h3 className="text-lg font-semibold leading-snug line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {item.description}
                </p>

                <Link
                  href={`/blog/${item._id}`}
                  className="
                    mt-3 inline-flex items-center
                    text-sm font-medium
                    text-cyan-400
                    hover:text-cyan-300
                    transition
                  "
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
