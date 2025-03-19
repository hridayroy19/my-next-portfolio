import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className=" lg:py-10 py-7 text-white xl:px-24 md:px-6 px-4">
      <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-4xl mb-16">
        Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] dark:shadow-gray-700/25">
          <div className="rounded-[10px] bg-gray-800 p-2 !pt-14 sm:p-6 dark:bg-gray-900">
            <Image
              width={300}
              height={200}
              alt="image"
              src="https://i.ibb.co.com/d4fNR8Qx/lesson-concept-illustration-114360-7937-1-removebg-preview.png"
              className="w-[250px] flex  mx-auto "
            />
            <div className="block text-xs  dark:text-gray-400">
              10th Oct 2022
            </div>
            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium  ">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>

            <div className="mt-4 flex flex-wrap gap-1">
              <button className="rounded-full py-2 bg-purple-100 px-2  text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
