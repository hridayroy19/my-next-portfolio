"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;
  console.log(id);

  return (
    <div className="bg-gray-600 py-20 h-screen ">
      <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="https://i.ibb.co.com/Rk5gWPd8/images-1.jpg"
            alt="image"
            width={800}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-green-500 font-semibold"> AC Stock House </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Inventory Manage Web App
          </h1>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This is another full stack responsive web application to manage
            store inventory. Where users can update the stock of a product by
            restocking or delivering products. The user can add or delete
            products from the list. Users can report bugs from the bug report
            section on the home page. Used jwt Token for more secure. Data
            stored in mongodb database
          </p>

          <h3 className="text-green-400 font-semibold mb-2">Technology used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <p className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
              React TypeScript Tailwind CSS HTML CSS JavaScript Node js Express
              js
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🌐 VIEW LIVE
            </a>
            <a
              href="/"
              target="_blank"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🚀 CLIENT CODE
            </a>
            <a
              href="/"
              target="_blank"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg text-center hover:opacity-90"
            >
              🚀 SERVER CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
