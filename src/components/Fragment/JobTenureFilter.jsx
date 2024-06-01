import React from "react";
import { useJobs } from "../../Context/JobContext";

export const JobTenureFilter = () => {
  const { jobTenure, setJobTenure } = useJobs();

  return (
    <select
      value={jobTenure}
      onChange={(e) => setJobTenure(e.target.value.toLowerCase())}
      className="px-2 py-1 border rounded-md"
    >
      <option value="">All Tenures</option>
      <option value="fulltime">Fulltime</option>
      <option value="freelance">Freelance</option>
      <option value="contract">Contract</option>
    </select>
  );
};