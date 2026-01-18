"use client";
import Loading from "@/app/loading";
import { IProduct } from "@/components/home/Projcet";

const ProjcetTabil = ({ projcet }: { projcet: IProduct[] }) => {
//   console.log(projcet);
  if (!projcet) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Projcet Title</th>
            <th className="py-3 px-4">Live URL</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          {projcet?.map((projcet) => (
            <tr key={projcet._id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{projcet.project_name} </td>
              <td className="py-3 px-4"> {projcet.title} </td>
              <td className="py-3 px-4"> {projcet.live_link} </td>
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

export default ProjcetTabil;
