"use client";
import Link from "next/link";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaLaptopCode, FaHome } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden p-4">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          <BsLayoutSidebar size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:w-60 bg-white shadow lg:block fixed top-0 left-0 h-full z-10 transform transition-transform ease-in-out duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-700 lg:hidden"
            onClick={toggleMenu}
          >
            <BsLayoutSidebar size={24} />
          </button>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">My Portfolio</h2>
            <nav className="space-y-4">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <BsLayoutSidebar size={18} /> <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/projcet"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <MdOutlinePlaylistAdd size={18} /> <span>Add Project</span>
              </Link>
              <Link
                href="/dashboard/blog"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <MdOutlinePlaylistAdd size={18} /> <span>Add Blog</span>
              </Link>
              <Link
                href="/dashboard/technology"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <FaLaptopCode size={18} /> <span>Add Technology</span>
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <FaHome size={18} /> <span>Home</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
