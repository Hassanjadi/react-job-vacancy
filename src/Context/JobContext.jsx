import React, { createContext, useContext, useState, useEffect } from "react";
import { getJobs } from "../services/jobs.services";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [jobTenure, setJobTenure] = useState("");
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
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobContext);
};
