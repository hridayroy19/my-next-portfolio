"use client";

import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineAddIcCall } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact3D() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0e1423]/90 py-24 px-4"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-cyan-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto bg-[#0e1423]/20 backdrop-blur-xl rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-14 p-10">
        {/* LEFT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8 text-white"
        >
          <h2 className="text-3xl font-semibold">Contact</h2>

          {/* NAME */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-white placeholder-gray-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-white placeholder-gray-400"
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2 text-white placeholder-gray-400"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            required
            placeholder="Comment or message"
            rows={4}
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2 resize-none text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="
              mt-6 px-8 py-3 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-medium
              shadow-lg hover:scale-105 transition
            "
          >
            Submit
          </button>
        </motion.form>

        {/* RIGHT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-[#0e1423]/30 backdrop-blur-xl
            rounded-3xl shadow-xl
            p-8 flex flex-col justify-center gap-6 text-white
          "
        >
          <h3 className="text-2xl font-semibold text-cyan-400">
            Hridoy Chandra Roy
          </h3>

          <div className="flex items-center gap-4 text-gray-200">
            <CiLocationOn className="text-xl text-cyan-400" />
            Dinajpur, Bangladesh
          </div>

          <div className="flex items-center gap-4 text-gray-200">
            <MdOutlineAddIcCall className="text-xl text-cyan-400" />
            +880 1738 211936
          </div>

          <div className="flex items-center gap-4 text-gray-200">
            <MdOutlineEmail className="text-xl text-cyan-400" />
            hrhridoyroy503@gmail.com
          </div>

          <p className="text-sm text-gray-400 pt-4">
            Open for freelance & remote opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
