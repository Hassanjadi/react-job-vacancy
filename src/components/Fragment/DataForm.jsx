import React from "react";
import { InputForm } from "../Element/Input";
import { TextareaForm } from "../Element/Textarea";
import { createJob } from "../../services/jobs.services";
import { useJobs } from "../../context/JobContext";
import { useNavigate } from "react-router-dom";

export const DataForm = () => {
  const navigate = useNavigate();
  const { setFetchStatus } = useJobs();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      job_description: event.target.job_description.value,
      job_qualification: event.target.job_qualification.value,
      job_type: event.target.job_type.value,
      job_tenure: event.target.job_tenure.value,
      job_status: event.target.job_status.value,
      company_name: event.target.company_name.value,
      company_image_url: event.target.company_image_url.value,
      company_city: event.target.company_city.value,
      salary_min: event.target.salary_min.value,
      salary_max: event.target.salary_max.value,
    };

    createJob(data, (status, res) => {
      if (status) {
        console.log("Job created successfully:", res);
        setFetchStatus(true);
        navigate("/dashboard/list-job-vacancy");
      } else {
        console.log("Failed to create job:", res);
      }
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 w-full border-dashed rounded-lg dark:border-gray-700 mt-14">
        <form className="max-w-full mx-4 md:mx-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-5 md:grid-cols-2">
            <InputForm
              label="Title"
              type="text"
              name="title"
              placeholder="Fullstack Web Developer"
            />
            <InputForm
              label="Company City"
              type="text"
              name="company_city"
              placeholder="Jakarta"
            />

            <InputForm
              label="Job Type"
              type="text"
              name="job_type"
              placeholder="Onsite"
            />
            <InputForm
              label="Job Tenure"
              type="text"
              name="job_tenure"
              placeholder="Fulltime"
            />
            <TextareaForm
              rows="3"
              cols="3"
              name="job_description"
              label="Description"
              placeholder="Description"
            />
            <TextareaForm
              rows="3"
              cols="3"
              name="job_qualification"
              label="Qualification"
              placeholder="Qualification"
            />
            <InputForm
              label="Status"
              type="number"
              name="job_status"
              placeholder="0"
              max="1"
            />
            <InputForm
              label="Company Name"
              type="text"
              name="company_name"
              placeholder="Google"
            />

            <InputForm
              label="Salary Min"
              type="number"
              name="salary_min"
              placeholder="100000"
            />
            <InputForm
              label="Salary Max"
              type="number"
              name="salary_max"
              placeholder="500000"
            />
            <InputForm
              label="Url Image"
              type="text"
              name="company_image_url"
              placeholder="http://"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
