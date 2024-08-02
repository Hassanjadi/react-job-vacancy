import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [jobTenure, setJobTenure] = useState("");
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [salaryRange, setSalaryRange] = useState([0, Infinity]);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  const [inputEdit, setInputEdit] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setJobs([...res.data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      axios
        .put(
          ` https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
        });
    }

    setCurrentId(-1);

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  const handleEdit = (event) => {
    let id = parseInt(event.target.value);
    setCurrentId(id);

    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        let data = res.data;

        setInput({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
      });
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        )
        .then((res) => {
          console.log("Data deleted successfully:", res);
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
        });
    }
  };

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

  let state = {
    filteredJobs,
    jobs,
    setJobs,
    input,
    setInput,
    inputEdit,
    setInputEdit,
    searchQuery,
    setSearchQuery,
    companyCity,
    setCompanyCity,
    jobTenure,
    setJobTenure,
    salaryRange,
    setSalaryRange,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleSalary,
    handleTime,
    handleInput,
    handleSubmit,
    handleDelete,
    handleEdit,
  };

  return (
    <JobContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  return useContext(JobContext);
};
