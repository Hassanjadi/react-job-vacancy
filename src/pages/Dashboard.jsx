import React from "react";

export const Dashboard = () => {
  return (
    <div className="mx-10 py-8">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Holla Minca!</h1>
        <p className="text-xs">Nice to meet you again . . .</p>
      </div>
      <div className="px-6 py-6 bg-sky-100 w-64 rounded-lg">
        <div className="flex gap-4 items-center">
          {/* <img src={All} alt="Icon" /> */}
          <div>
            <h1 className="text-2xl font-bold text-indigo-500">200</h1>
            <p className="text-sm font-bold text-indigo-500">All Job</p>
          </div>
        </div>
      </div>
    </div>
  );
};
