import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  console.log(blog, "data");
  return (
    <div className="lg:py-10 py-7 text-white xl:px-24 md:px-6 px-4">
      <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-4xl mb-16">
        Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((blog) => (
          <div
            key={blog._id}
            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] dark:shadow-gray-700/25"
          >
            <div className="rounded-[10px] bg-gray-800 p-2 !pt-5 sm:p-6 dark:bg-gray-900">
              <Image
                width={400}
                height={300}
                alt={blog.name}
                src={blog.image}
                className="w-[350px] h-[250px] mb-5 flex mx-auto"
              />
              <div className="block text-xs dark:text-gray-400">
                {blog.publishedDate}
              </div>
              <h3 className="mt-0.5 text-xl font-medium">{blog.name}</h3>

              <div className="mt-4 flex flex-wrap gap-1">
                <button className="rounded-full py-2 bg-purple-100 px-2 text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                  <Link href={`/blog/${blog._id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
