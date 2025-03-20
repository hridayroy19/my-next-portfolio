/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

export const getBlog = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blog/all", {
        cache: "no-store" // Avoid caching issues on server components
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
