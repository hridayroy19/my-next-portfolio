"use client";
import { logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const router = useRouter(); 

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <header className="bg-white shadow px-6 py-4 ">
      <div className="flex justify-between gap-4">
        <div>
          <h1 className="text-gray-700">Hello, Hridoy 👋</h1>{" "}
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="flex items-center border-2 space-x-2 p-1 text-cyan-600 hover:text-red-600"
          >
            <FiLogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
