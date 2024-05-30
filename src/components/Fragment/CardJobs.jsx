import { getJobs } from "../../services/jobs.services";
import React, { useEffect, useState } from "react";

export const CardJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs((data) => {
      setJobs(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.length > 0 &&
        jobs.map((job) => (
          <div className="bg-white px-4 py-8 rounded-xl" key={job.id}>
            <div className="flex flex-col h-[350px] justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center bg-gray-100 max-w-[99px] min-h-[99px] p-4 rounded-lg">
                    <img
                      src={job.company_image_url}
                      alt={job.company_name}
                      className="w-full h-full bg-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-bold">{job.title}</p>
                    <div className="flex gap-2 text-sm font-semibold text-gray-400">
                      <p>{job.company_name}</p>&bull;
                      <p>{job.company_city}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                    {job.job_tenure}
                  </p>
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                    {job.job_type}
                  </p>
                  <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                    {job.job_status}
                  </p>
                </div>
                <p className="text-xs">{job.job_description}</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <p className="text-gray-400 font-semibold">{job.updated_at}</p>
                <span>&bull;</span>
                <p className="font-semibold">
                  {job.salary_min} - {job.salary_max}/Month
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
