;
import { useRouter } from "next/router";
import { FaHome, FaLongArrowAltUp } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    // Example: clear localStorage or any auth token
    localStorage.removeItem("token"); 
    // Redirect to login or home
    router.push("/login"); 
  };

  return (
    <aside className="w-64 bg-white shadow hidden md:flex flex-col justify-between">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">My Portfolio</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FaHome size={18} /> <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FaLayerGroup size={18} /> <span>Dashboard</span>
          </a>
        </nav>
      </div>

      {/* Logout section */}
      <div className="p-6 border-t">
        <button 
          onClick={handleLogout} 
          className="flex items-center space-x-2 text-red-600 hover:text-red-800"
        >
          <FaLongArrowAltUp size={18} /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
