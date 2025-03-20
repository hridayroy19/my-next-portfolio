
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">Card 1</div>
            <div className="bg-white p-4 rounded-xl shadow">Card 2</div>
            <div className="bg-white p-4 rounded-xl shadow">Card 3</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
