import { getJobs } from "../services/jobs.services";
import React, { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [jobTenure, setJobTenure] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, Infinity]);

  useEffect(() => {
    getJobs((data) => {
      setJobs(data);
    });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCity = companyCity ? job.company_city === companyCity : true;
    const matchesTenure = jobTenure ? job.job_tenure === jobTenure : true;
    const matchesSalary =
      (salaryRange[0] <= job.salary_min && job.salary_min <= salaryRange[1]) ||
      (salaryRange[0] <= job.salary_max && job.salary_max <= salaryRange[1]);

    return matchesSearch && matchesCity && matchesTenure && matchesSalary;
  });

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

  return (
    <JobContext.Provider
      value={{
        jobs: filteredJobs,
        searchQuery,
        setSearchQuery,
        companyCity,
        setCompanyCity,
        jobTenure,
        setJobTenure,
        salaryRange,
        setSalaryRange,
        handleSalary,
        handleTime,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobContext);
};
