import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    id: "",
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

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setInput({ ...input, title: value });
    }
    if (name === "job_description") {
      setInput({ ...input, job_description: value });
    }
    if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value });
    }
    if (name === "job_type") {
      setInput({ ...input, job_type: value });
    }
    if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    }
    if (name === "job_status") {
      setInput({ ...input, job_status: value });
    }
    if (name === "company_name") {
      setInput({ ...input, company_name: value });
    }
    if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    }
    if (name === "company_city") {
      setInput({ ...input, company_city: value });
    }
    if (name === "salary_min") {
      setInput({ ...input, salary_min: value });
    }
    if (name === "salary_max") {
      setInput({ ...input, salary_max: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let {
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

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((error) => {});

      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // console.log(data);

  const handleText = (params, max) => {
    if (params === undefined) {
      return "";
    } else {
      return params.slice(0, max) + "..";
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

  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
  };

  let handleFunction = {
    handleText,
    handleSalary,
    handleTime,
    handleInput,
    handleSubmit,
    handleDelete,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
