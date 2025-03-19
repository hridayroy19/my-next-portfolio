"use client";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-3xl sm:text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex flex-col lg:flex-row gap-6 max-w-5xl bg-gray-700 md:p-6 p-4 rounded-lg mx-auto">
          {/* Contact Form */}
          <form className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            ></textarea>
            <button className="btn-primary w-fit bg-cyan-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-cyan-700">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-7">
            <div className="text-white">
              <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                <div className="text-4xl items-center justify-center rounded-full">
                  <p className="flex gap-4 items-center">
                    <MdOutlineEmail className="text-white bg-cyan-600 p-2 rounded-full" />
                    <span className="text-[18px] sm:text-[22px]">
                      hrhridoyroy503@gmail.com
                    </span>
                  </p>
                  <p className="flex gap-4 mt-2 mb-2 items-center">
                    <MdOutlineAddIcCall className="text-white p-2 bg-cyan-600 rounded-full" />
                    <span className="text-[18px] sm:text-[22px]">
                      +8801738211936
                    </span>
                  </p>
                  <p className="flex gap-4 items-center">
                    <CiLocationOn className="text-white bg-cyan-600 p-2 rounded-full" />
                    <span className="text-[18px] sm:text-[22px]">
                      Dinajpur, Bangladesh
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
