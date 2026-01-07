/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { currentUser } from "@/services/AuthService";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  name: string;
  id: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await currentUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "Skill", id: "skill" },
    { name: "Projects", id: "projects" },
    { name: "Work", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1423]/90 backdrop-blur border-b border-gray-800">
      <nav className="flex items-center justify-between px-4 md:px-8 xl:px-14 h-[72px]">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dsb1inal0/image/upload/v1767764296/ChatGPT_Image_Jan_7_2026_11_37_28_AM_uqmz4z.png"
            alt="Hridoy Logo"
            width={160}
            height={40}
            priority
            className="w-[120px] md:w-[140px] lg:w-[160px] h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="text-white text-lg font-semibold hover:text-cyan-400 transition"
              >
                {link.name}
              </button>
            </li>
          ))}

          {user?.role === "admin" && (
            <li>
              <a
                href="/dashboard"
                className="text-white font-semibold hover:text-cyan-400"
              >
                Dashboard
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoCloseSharp size={30} /> : <IoMenu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-[#0e1423] border-t border-gray-800 px-6 py-6 space-y-5"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left text-white text-lg font-semibold hover:text-cyan-400 transition"
              >
                {link.name}
              </motion.button>
            ))}

            {user?.role === "admin" && (
              <a
                href="/dashboard"
                className="block text-white text-lg font-semibold hover:text-cyan-400"
              >
                Dashboard
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
