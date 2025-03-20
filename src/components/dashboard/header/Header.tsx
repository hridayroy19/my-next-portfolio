import { BsMenuUp } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between md:justify-end">
      <button className="md:hidden text-gray-700">
        <BsMenuUp size={24} />
      </button>
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-gray-700">Hello, Hridoy 👋</span>
      </div>
    </header>
  );
}
