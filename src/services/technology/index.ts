/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { ProjectData } from "@/components/dashboard/technology/TechnologyForm";

export const addTechnology = async (productData: ProjectData): Promise<any> => {
    // console.log(productData, "main data")
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/technology/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


export const getTechnology = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/technology/all`, {
        cache: "no-store"
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      // console.log("Fetched Users:", data);
      return data;
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
      return { success: false, message: error.message };
    }
  };
  