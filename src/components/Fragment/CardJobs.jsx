import axios from "axios";
import React, { useEffect, useState } from "react";

export const CardJobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

  console.log(data);

  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data !== null &&
        data.map((res) => {
          return (
            <div class="bg-white px-4 py-8 rounded-xl" key={res.id}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center bg-gray-100 min-w-[99px] p-4 rounded-lg">
                    <img
                      src={res.company_image_url}
                      alt="Google"
                      className="w-full h-full bg-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-bold">{res.job_description}</p>
                    <div className="flex gap-2 text-sm font-semibold text-gray-400">
                      <p>{res.company_name}</p>&bull;
                      <p>{res.company_city}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                    {res.job_tenure}
                  </p>
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                    {res.job_type}
                  </p>
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                    Internship
                  </p>
                </div>
                <p className="text-xs">
                  Google LLC is an American multinational technology company
                  that focuses on search engin...
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-gray-400 text-xs font-semibold">
                    2 Days ago
                  </p>
                  <span>&bull;</span>
                  <p className="text-xs font-semibold">100k - 200k/Month</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
