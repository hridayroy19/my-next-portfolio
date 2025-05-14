"use client";
import Loading from "@/components/ui/loading";
import { ITechnology } from "@/type";
import Image from "next/image";

const TechnologyTabil = ({ projcet }: { projcet: ITechnology[] }) => {
  //   console.log(projcet);
  if (!projcet) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4">Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          {projcet?.map((projcet) => (
            <tr key={projcet._id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                {" "}
                <Image
                  height={50}
                  width={60}
                  alt="imge"
                  className="object-contain"
                  src={projcet?.image}
                />{" "}
              </td>
              <td className="py-3 px-4"> {projcet.name} </td>
              <td className="py-3 px-4 space-x-4">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnologyTabil;
