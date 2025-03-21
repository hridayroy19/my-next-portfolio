/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { IBloge } from "@/type";

export const getBlog = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/blog/all", {
      cache: "no-store" // Avoid caching issues on server components
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


export const addBlog = async (blogData: IBloge): Promise<any> => {
  console.log(blogData, "main data");
  try {
    const res = await fetch("http://localhost:5000/api/blog/create-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!res.ok) {
      throw new Error("Failed to add blog");
    }

    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return { success: false, message: "API request failed" };
  }
};
