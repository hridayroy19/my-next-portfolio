/* eslint-disable @typescript-eslint/no-explicit-any */


export const addProduct = async (productData: FormData):Promise<any> => {
    console.log(productData,"main data")
    try {
      const res = await fetch(`http://localhost:5000/product`, {
        method: "POST",
        body: productData,
      });
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };