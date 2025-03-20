"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IBlog } from "../home/Blog";

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const [blog, setBlog] = useState<IBlog>();
  console.log(blog, "dataaa");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blog/${id}`);
        console.log(res);
        const result = await res.json();
        console.log(result);
        setBlog(result.result);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-700 py-10 ">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-6">
          Bloge Details
        </h2>
        {/* Blog Image */}
        <div className="mb-6">
          <Image
            src={blog.image}
            alt="Summer Camp"
            width={700}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>
        <p className="mb-3 text-white">publish_data: {blog.publishedDate}</p>

        {/* Blog Title */}
        <h3 className="text-xl md:text-2xl text-white  font-bold mb-4">
          {blog.name}
        </h3>

        {/* Blog Paragraphs */}
        <p className="text-white mb-4">{blog.description}</p>
        <p className="text-white mb-4">
          <span className="text-xl font-semibold">Accuracy : </span>{" "}
          {blog.accuracy}
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-pink-400 bg-pink-50 p-4 italic text-gray-800 mb-4">
          <span className="text-xl font-semibold">Optimization : </span>{" "}
          {blog.optimization}
        </blockquote>

        {/* Final Paragraph */}
        <p className="text-white mb-4">
          <span className="text-xl font-semibold">Practicality : </span>{" "}
          {blog.practicality}
        </p>
        <p className="text-white mb-4">
          <span className="text-xl font-semibold">Reliability : </span>{" "}
          {blog.reliability}
        </p>
        <p className="text-white mb-4">
          <span className="text-xl font-semibold">Scalable : </span>{" "}
          {blog.scalable}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
