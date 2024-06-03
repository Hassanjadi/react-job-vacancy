import { Button } from "../Element/Button";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobs.services";

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

export const CardApply = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    getDetailJob(id, (data) => {
      setJob(data);
    });
  }, [id]);

  return (
    <div className="bg-white rounded-xl p-8 mt-8 lg:h-80 lg:w-1/4 lg:-mt-44">
      <Button classname="bg-[#635BFF] text-white w-full">
        Apply for this position
      </Button>
      <div className="flex justify-between my-4">
        <p className="text-sm font-medium">Date Post</p>
        <p className="text-sm font-bold">{handleTime(job.created_at)}</p>
      </div>
      <hr />
      <div className="flex justify-between my-4 text-sm">
        <p className="text-sm font-medium">Job type</p>
        <p className="text-sm font-bold">{job.job_type}</p>
      </div>
      <hr />
      <div className="flex justify-between my-4 text-sm">
        <p className="text-sm font-medium">Job Status</p>
        <p className="text-sm font-bold">
          {job.job_status === 0 ? "Close" : "Open"}
        </p>
      </div>
      <hr />
      <div className="flex justify-between my-4 text-sm">
        <p className="text-sm font-medium">Salary</p>
        <p className="text-sm font-bold">
          {handleSalary(job.salary_min)} - {handleSalary(job.salary_max)}
        </p>
      </div>
      <hr />
    </div>
  );
};
