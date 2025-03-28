"use client";
// import Typewriter from "typewriter-effect";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 xl:px-20">
      <div className="flex md:flex-row flex-col-reverse items-center gap-12 w-full max-w-7xl">
        {/* Left side */}
        <div className="flex-1 text-start">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl  font-bold">
            My Name is <span className="text-cyan-400">Hridoy</span>
          </h1>
          <div className="flex gap-2 md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300 justify-start">
            <span> I&#39;m a Full Stack Developer </span>
            {/* <span>
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Web Developer 💻..",
                    "React Developer 💻..",
                    "Front End Developer 🧑‍💻..",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                }}
              />
            </span> */}
          </div>
          <p className="text-gray-400 mt-4 max-w-md mx-auto lg:mx-0">
            I&apos;m a dedicated web developer passionate about blending
            creativity and technical expertise. I specialize in creating
            seamless, user-centric web solutions that balance design and
            functionality.
          </p>

          {/* Button + Socials */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5 justify-center lg:justify-start">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
              <a
                className="flex items-center gap-1"
                href="/animationIcon/resume.pdf"
                download
              >
                <FiDownload />
                Download CV
              </a>
            </Button>

            {/* Socials */}
            <div className="flex gap-4">
              <Link
                href="https://github.com/hridayroy19"
                target="_blank"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <BsGithub size={28} />
              </Link>
              <Link
                href="https://www.facebook.com/hridayray.hriday.1/"
                target="_blank"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <CiFacebook size={28} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hridoy-chandra-roy-9313732a4/"
                target="_blank"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <FaLinkedin size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px]">
          {/* Outer ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="lg:w-[90%] w-[280px] lg:h-full animate-spin-slow"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                stroke="cyan"
                strokeWidth="3"
                fill="none"
                strokeDasharray="120 60"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Inner ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-[90%] h-[90%] animate-spin-slow-reverse"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                stroke="limegreen"
                strokeWidth="3"
                fill="none"
                strokeDasharray="100 80"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-[200px] h-[240px] sm:w-[220px] sm:h-[220px] md:w-[200px] md:h-[310px] lg:w-[250px] lg:h-[340px] mx-auto rounded-full overflow-hidden flex items-center justify-center ">
            <Image
              src="https://i.ibb.co/WcDZNtJ/20230409234326-IMG-7354-removebg-removebg-preview.png"
              alt="profile"
              width={280}
              height={280}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
