import React from "react";

export const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg  mt-14">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            5
          </h5>
          <p className="text-3xl font-semibold text-gray-700 dark:text-gray-400">
            Jobs Total
          </p>
        </a>
      </div>
    </div>
  );
};
