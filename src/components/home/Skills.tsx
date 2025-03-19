"use client";
import dynamic from "next/dynamic";
import okay from "../../../public/animationIcon/Okey.json";
import Image from "next/image";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const techStack = [
  "https://i.ibb.co.com/RRBTN0k/krwhoz9rcovmi2npn8lg.png",
  "https://i.ibb.co.com/SC6CFgJ/kmy3kk5naabcpnwrcduv.png",
  "https://i.ibb.co.com/WN1rLhT8/kxa0rgp1wfc1x0edq8tn.png",
  "https://i.ibb.co/k0QSbBx/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243-4761515415233628528.png",
  "https://i.ibb.co.com/LhZj7fMC/nlnd5gxalhqvmkwzwukw.png",
  "https://i.ibb.co.com/kszCGL22/wxl5ry7riosigvwxqrgv.png",
  "https://i.ibb.co/P4MGX8Y/download-removebg-preview.png",
  "https://i.ibb.co/jbhPkVv/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png",
  "https://i.ibb.co/98C0ndb/Mongo-DB-Emblem-removebg-preview.png",
  "https://i.ibb.co/8KB10fJ/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png",
  "https://i.ibb.co/wsWGjJs/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text-removebg.png",
  "https://i.ibb.co/0VYGYbf/download-1.png",
  "https://i.ibb.co/pK6cFLz/download-2-removebg-preview.png",
];

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
    <div className=" lg:flex justify-evenly items-center gap-5 text-white max-w-7xl mx-auto ">
      {/* Tech Stack Section */}
      <div className="flex-1">
        <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl mb-10">
          Tech Stack
        </h1>
        <div className="flex justify-center">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          >
            {techStack.map((src, i) => (
              <div
                key={i}
                className="flex justify-center hover:scale-110 transition-transform items-center"
              >
                <Image
                  width={100}
                  height={100}
                  className=" md:w-20 w-16 h-16 md:h-20 hover:scale-110 transition-transform"
                  src={src}
                  alt={`Tech logo ${i + 1}`}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="flex-1 flex justify-center mt-5 lg:mt-0">
        <div className="w-full max-w-[400px]  lg:max-w-[450px]">
          <Lottie options={defaultOptions} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
