/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { ProjectData } from "@/components/dashboard/projcet/projcetForm/ProjcetForm";

export const addProduct = async (productData: ProjectData): Promise<any> => {
  console.log(productData, "main data")
  try {
    const res = await fetch(`http://localhost:5000/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),  // Stringify the product data
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};



export const getProjcet = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/projcet/all", {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched Users:", data);
    return data;
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    return { success: false, message: error.message };
  }
};
