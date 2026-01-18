"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Study = () => {
  return (
    <div className="p-8 bg-[#0e1423]/90">
      <section
        id="hireme"
        className="md:mt-7 max-w-7xl mx-auto  mt-5 px-4 sm:px-6 lg:px-14 text-white"
      >
        {/* Title */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl mb-5 font-semibold">
            Academic & Course Experience
          </h3>
        </div>

        {/* CARD (same design, just motion) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: 1200 }}
          className="
          bg-gray-700
          relative
          px-6 sm:px-8
          rounded-2xl
          mx-auto
          mt-24
          flex gap-6
          flex-col-reverse lg:flex-row
          items-center
        "
        >
          {/* TEXT */}
          <motion.div
            whileHover={{ rotateY: -2, rotateX: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex-1"
          >
            <div className="lg:text-left text-justify text-sm sm:text-base mt-4 text-gray-200 leading-6">
              <div className="py-2 p-2">
                <h1 className="text-xl mb-2 text-yellow-300">
                  Diploma in Computer Technology
                </h1>
                <p>Aptouch Polytechnic Institute, Dinajpur</p>
                <p>GPA: 3.65 (out of 4.00) | Year: 2020 - 2024</p>
              </div>

              <div className="mt-2 p-2">
                <h1 className="text-xl text-yellow-300">
                  Secondary School Certificate
                </h1>
                <p>Vhander Khando High School</p>
                <p>GPA: 4.06 (out of 5.00) | Year: 2018 - 2020</p>
              </div>

              <div className="mt-2 p-2">
                <h1 className="text-xl text-yellow-300">
                  Next Level Web Developer
                </h1>
                <p>
                  Complete Next Level Web Development Course with Jhankar Mahbub
                </p>
                <p>October 2024 - March 2025</p>
              </div>

              <div className="mt-2 p-2">
                <h1 className="text-xl text-yellow-300">Professional Course</h1>
                <p>Complete Web Development Course with Jhankar Mahbub</p>
                <p>July 2023 - December 2023</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE (same position, depth added) */}
          <motion.div
            whileHover={{ rotateY: 3, rotateX: -2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
            flex-1
            relative
            lg:h-[32rem]
            h-80
            lg:absolute
            bottom-0
            -right-3
            drop-shadow-2xl
          "
          >
            <Image
              width={500}
              height={500}
              src="https://i.ibb.co/fpVYfWP/20230409234326-IMG-71-1-removebg-preview.png"
              alt="Academic Experience Image"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Study;
