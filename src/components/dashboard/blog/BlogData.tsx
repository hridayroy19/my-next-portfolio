"use client";
import Loading from "@/app/loading";
import { IBloge } from "@/type";

export const BlogDatas = ({ blog }: { blog: IBloge[] }) => {
  console.log(blog);

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Blog Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blog?.map((blog) => (
            <tr
              key={blog._id}
              className="bg-gray-100 border text-left text-gray-600 uppercase text-sm"
            >
              <th className="py-3 px-4">{blog.name}</th>
              <th className="py-3 px-4"> {blog.publishedDate} </th>
              <th className="py-3 px-4">Deleted</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
