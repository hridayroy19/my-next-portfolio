"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e1423]">
      <div className="relative flex flex-col items-center gap-5">
        {/* Glow background */}
        <motion.div
          className="absolute z-0 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo Animation */}
        <motion.div
          className="relative z-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="https://res.cloudinary.com/dsb1inal0/image/upload/v1767764296/ChatGPT_Image_Jan_7_2026_11_37_28_AM_uqmz4z.png"
            alt="Hridoy Logo"
            width={120}
            height={120}
            priority
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-400 text-xs tracking-widest uppercase z-20"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
