"use client";
import Image from "next/image";

const Study = () => {
  return (
    <section id="hireme" className="py-16 px-6 sm:px-10 lg:px-20 text-white">
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl mb-10 font-semibold">
          Academic Experience
        </h3>
      </div>
      <div className="bg-gray-700 relative px-8 py-5 rounded-2xl mx-auto  mt-24 flex gap-6 flex-col-reverse lg:flex-row items-center">
        <div className="flex-1">
          <div className="lg:text-left text-justify text-sm sm:text-base mt-4 text-gray-200 leading-6">
            <div className="py-3 p-2">
              <h1 className="text-xl mb-2 text-yellow-300">
                Diploma in Computer Technology
              </h1>
              <p>Aptouch Polytechnic Institute, Dinajpur, Bangladesh</p>
              <p>GPA: 4 (out of 3.65) 2020 - 2024</p>
            </div>
            <div className="mt-4 p-2">
              <h1 className="text-xl text-yellow-300">
                Secondary School Certificate
              </h1>
              <p>Vhander Khando High School, Dinajpur</p>
              <p>GPA: 5 (out of 4.00) 2018 - 2020</p>
            </div>
            <div className="mt-4 p-2">
              <h1 className="text-xl text-yellow-300">Professional Course</h1>
              <p>Complete Web Development Course with Jhankar Mahbub</p>
              <p>July 2023 - December 2023</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/fpVYfWP/20230409234326-IMG-71-1-removebg-preview.png"
            alt="Academic Experience Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Study;
