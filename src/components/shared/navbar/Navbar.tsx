"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full fixed top-0 z-50 py-5 border-y border-b-gray-800 px-8 xl:px-20 bg-[#0e1423] flex justify-between items-center shadow-2xl">
      {/* Branding */}
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold">Hridoy</span>
        <span className="text-xl text-white px-1">|</span>
        <span className="text-cyan-400 text-lg font-semibold">
          Web Developer
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`text-lg font-semibold ${
                pathname === link.path
                  ? "text-cyan-400 underline"
                  : "text-white hover:text-cyan-400"
              }`}
              aria-current={pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <IoCloseSharp className="text-white w-6 h-6" />
          ) : (
            <IoMenu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-[#0e1423] shadow-lg rounded-lg py-4 px-6 space-y-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block text-lg font-semibold ${
                pathname === link.path
                  ? "text-cyan-400 underline"
                  : "text-white hover:text-cyan-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
