"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaLaptopCode, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlinePlaylistAdd } from "react-icons/md";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <aside className="w-60 bg-white shadow hidden md:flex flex-col justify-between">
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

      {/* Logout section */}
      <div className="p-6 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-red-600 hover:text-red-800"
        >
          <FiLogOut size={18} /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
