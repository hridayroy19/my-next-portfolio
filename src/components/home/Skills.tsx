"use client";
import Lottie from "react-lottie";
import okay from "../../../public/animationIcon/Okey.json";
import Image from "next/image";

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id="skill"
      className="pt-10 md:pt-20 lg:flex justify-evenly items-center gap-5 text-white max-w-7xl mx-auto px-4"
    >
      {/* Tech Stack Section */}
      <div className="flex-1">
        <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl mb-10">
          Tech Stack
        </h1>
        <div className="flex justify-center">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {/* React Logo */}

            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co.com/RRBTN0k/krwhoz9rcovmi2npn8lg.png"
                alt="React Logo"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co.com/SC6CFgJ/kmy3kk5naabcpnwrcduv.png"
                alt="React Logo"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co.com/WN1rLhT8/kxa0rgp1wfc1x0edq8tn.png"
                alt="React Logo"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/k0QSbBx/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243-4761515415233628528.png"
                alt="React Logo"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co.com/LhZj7fMC/nlnd5gxalhqvmkwzwukw.png"
                alt="React Logo"
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co.com/kszCGL22/wxl5ry7riosigvwxqrgv.png"
                alt="React Logo"
                priority
              />
            </div>
            {/* Tailwind Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-16 lg:w-24 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/P4MGX8Y/download-removebg-preview.png"
                alt="Tailwind CSS Logo"
                priority
              />
            </div>
            {/* Firebase Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-16 lg:w-20 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/jbhPkVv/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png"
                alt="Firebase Logo"
                priority
              />
            </div>
            {/* MongoDB Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-16 lg:w-20 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/98C0ndb/Mongo-DB-Emblem-removebg-preview.png"
                alt="MongoDB Logo"
                priority
              />
            </div>
            {/* JavaScript Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/8KB10fJ/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png"
                alt="JavaScript Logo"
                priority
              />
            </div>
            {/* Node.js Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-14 lg:w-20 h-12 lg:h-16 hover:scale-110 transition-transform"
                src="https://i.ibb.co/wsWGjJs/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text-removebg.png"
                alt="Node.js Logo"
                priority
              />
            </div>
            {/* Express.js Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-20 lg:w-36 h-8 lg:h-12 hover:scale-110 transition-transform"
                src="https://i.ibb.co/0VYGYbf/download-1.png"
                alt="Express.js Logo"
                priority
              />
            </div>
            {/* CSS Logo */}
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                className="w-16 lg:w-20 hover:scale-110 transition-transform"
                src="https://i.ibb.co/pK6cFLz/download-2-removebg-preview.png"
                alt="CSS Logo"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lottie Animation Section */}
      <div className="flex-1 flex justify-center mt-10 lg:mt-0">
        <div className="w-full max-w-[350px] lg:max-w-[450px]">
          <Lottie options={defaultOptions} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;