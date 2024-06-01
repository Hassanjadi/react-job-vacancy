import React from "react";
import { Link } from "react-router-dom";
import { useJobs } from "../../Context/JobContext";

const handleTime = (dateTime) => {
  const currentDate = new Date();
  const targetDate = new Date(dateTime);

  const timeDifference = currentDate - targetDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference === 1) {
    return "Yesterday";
  } else {
    return `${daysDifference} days ago`;
  }
};

const handleSalary = (salary) => {
  if (typeof salary !== "number") {
    return "Invalid input";
  }

  const units = ["", "k", "M", "B", "T"];
  let unitIndex = 0;
  while (salary >= 1000 && unitIndex < units.length - 1) {
    salary /= 1000;
    unitIndex++;
  }

  return `${salary.toFixed(0)}${units[unitIndex]}`;
};

export const CardJobs = () => {
  const { jobs } = useJobs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.length > 0 &&
        jobs.map((job) => (
          <div className="bg-white px-4 py-4 rounded-xl" key={job.id}>
            <Link to={`/job/${job.id}`}>
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
                      {job.job_status === 0 ? "Close" : "Open"}
                    </p>
                  </div>
                  <p className="text-xs">{job.job_description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="text-gray-400 font-semibold">
                    {handleTime(job.updated_at)}
                  </p>
                  <span>&bull;</span>
                  <p className="font-semibold text-sm">
                    {handleSalary(job.salary_min)} -{" "}
                    {handleSalary(job.salary_max)}/Month
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
