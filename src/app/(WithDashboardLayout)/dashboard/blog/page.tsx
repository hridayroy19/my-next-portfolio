import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import BlogForm from "@/components/dashboard/blog/BlogForm";
import { BlogDatas } from "@/components/dashboard/blog/BlogData";
import { getBlog } from "@/services/blog";

const page = async() => {
    const blog = await getBlog()
  return (
    <div className="p-6">
      {/* Top Navbar area with button */}
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Bloge</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Add Bloge</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[90%] sm:w-[80%] md:w-[700px] mx-auto p-4 md:p-6">
            <DropdownMenuLabel>
              <BlogForm />
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <BlogDatas blog={blog.result} />
    </div>
  );
};

export default page;
