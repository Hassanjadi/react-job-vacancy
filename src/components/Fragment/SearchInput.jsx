// SearchInput.js
import React from "react";
import { Input } from "../Element/Input/Input";
import { useJobs } from "../../Context/JobContext";

export const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useJobs();

  return (
    <Input
      placeholder="Search for job"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};
