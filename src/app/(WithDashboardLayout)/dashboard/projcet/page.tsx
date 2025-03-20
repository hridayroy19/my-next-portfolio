import { Button } from "@/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddProjcetForm from "@/components/dashboard/projcet/projcetForm/ProjcetForm";

const Projcetpage = () => {
  return (
    <div className="p-6">
      {/* Top Navbar area with button */}
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Projects</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Add Projcet</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[90%] sm:w-[80%] md:w-[700px] mx-auto p-4 md:p-6">
            <DropdownMenuLabel>
              <AddProjcetForm />
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Portfolio Website</td>
              <td className="py-3 px-4">Web</td>
              <td className="py-3 px-4">$300</td>
              <td className="py-3 px-4 space-x-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projcetpage;
