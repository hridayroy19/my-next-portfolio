"use client";
import dynamic from "next/dynamic";
import animation from "../../../public/animationIcon/Computer.json";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const WorksType = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieContainerStyle = {
    transform: "rotate(0deg)", 
  };

  const services = [
    {
      id: "01",
      name: "React js Developer",
      description:
        "Designing dynamic interfaces, managing state flawlessly, and integrating data seamlessly—your knack for React development fuels high-performance, collaborative, and innovative web experiences.",
    },
    {
      id: "02",
      name: "Front-end Developer",
      description:
        "Creating captivating interfaces, and integrating data flawlessly—your expertise as a front-end developer drives high-performance, collaborative, and innovative web experiences.",
    },
    {
      id: "03",
      name: "MERN Stack Developer",
      description:
        "Crafting captivating interfaces, and integrating data flawlessly within the MERN stack—your expertise drives high-performance, collaborative, and innovative web experiences from end to end.",
    },
  ];

  return (
    <div className="  text-white max-w-7xl mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-center uppercase mt-4 mb-10 lg:mt-5 text-xl font-bold md:text-3xl lg:text-5xl"
      >
        What I do
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly lg:gap-16 items-center">
        {/* Lottie Animation Section */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div
            className="w-[300px] md:w-[350px] lg:w-[340px] xl:w-[450px] h-[200px] lg:h-[400px] xl:h-[500px] mx-auto"
            style={lottieContainerStyle}
          >
            <Lottie options={defaultOptions} />
          </div>
        </div>

        {/* Services Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-center text-center items-center  pl-2 mt-8 lg:mt-0"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="card px-6 py-5 mt-8 w-[90%] md:w-[95%] h-[80%] sm:w-[400px] lg:w-[500px] xl:w-[600px] mx-auto shadow-lg shadow-cyan-500"
            >
              <h4 className="font-semibold text-2xl text-yellow-600 mb-3">
                {item.name}
              </h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksType;
