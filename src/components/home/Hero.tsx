"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        min-h-[calc(100vh-72px)]
        flex items-center
        px-4 md:px-10 xl:px-20
        pt-[72px]
        bg-[#0e1423]/90
      "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-gray-400 mb-2">Hello 👋</p>

          <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            My Name is <br />
            <span className="text-cyan-400">Hridoy</span>
          </h1>

          <h2 className="mt-4 text-lg md:text-2xl font-semibold text-gray-300">
            I&apos;m a Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto lg:mx-0">
            I&apos;m a dedicated web developer passionate about blending
            creativity and technical expertise. I specialize in creating
            seamless, user-centric web solutions that balance design and
            functionality.
          </p>

          {/* BUTTON + SOCIAL */}
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <Button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-2 rounded-md shadow-lg transition">
              <a
                href="/animationIcon/resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <FiDownload />
                Download CV
              </a>
            </Button>

            <div className="flex gap-5">
              <Link
                href="https://github.com/hridayroy19"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <BsGithub size={26} />
              </Link>
              <Link
                href="https://www.facebook.com/hridayray.hriday.1/"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <CiFacebook size={28} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hridoy-chandra-roy-9313732a4/"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={26} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex-1 flex items-center justify-center"
        >
          {/* GLOW CIRCLE BACKGROUND */}
          <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/10 blur-2xl"></div>

          {/* IMAGE WRAPPER */}
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl z-10">
            <Image
              src="https://i.ibb.co/WcDZNtJ/20230409234326-IMG-7354-removebg-removebg-preview.png"
              alt="Hridoy Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
