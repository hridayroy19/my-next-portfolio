/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProjectData } from "@/components/dashboard/projcet/projcetForm/ProjcetForm";

export const addProduct = async (productData:ProjectData):Promise<any> => {
    console.log(productData,"main data")
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