"use client";
import { logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { BsMenuUp } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const router = useRouter(); // Initialize useRouter hook

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between md:justify-end">
      <button className="md:hidden text-gray-700">
        <BsMenuUp size={24} />
      </button>
      <div className="flex gap-4">
        <div>
          <h1 className="text-gray-700">Hello, Hridoy 👋</h1>{" "}
          {/* Logout section */}
        </div>{" "}
        <div>
          <button
            onClick={handleLogout}
            className="flex items-center border-2 space-x-2 text-cyan-600 hover:text-red-600"
          >
            <FiLogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
