import { Button } from "@/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddProjcetForm from "@/components/dashboard/projcet/projcetForm/ProjcetForm";
import ProjcetTabil from "@/components/dashboard/projcet/projcetTabil/ProjcetTabil";
import { getProjcet } from "@/services/projcet";

const Projcetpage = async () => {
  const projcet = await getProjcet()
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
    <ProjcetTabil projcet={projcet.result} />
    </div>
  );
};

export default Projcetpage;
