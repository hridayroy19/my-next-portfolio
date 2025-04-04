import { Button } from "@/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddTechnologyForm from "@/components/dashboard/technology/TechnologyForm";
import { getTechnology } from "@/services/technology";
import TechnologyTabil from "@/components/dashboard/projcet/technology/TechnologyTabil";


const Technologypage = async () => {
    const technology = await getTechnology()
  return (
    <div className="p-6">
      {/* Top Navbar area with button */}
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Technology</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Add Skill</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[80%]  md:w-[400px] mx-auto p-4 md:p-6">
            <DropdownMenuLabel>
              <AddTechnologyForm />
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <TechnologyTabil projcet={technology.result} />
    </div>
  );
};

export default Technologypage;
