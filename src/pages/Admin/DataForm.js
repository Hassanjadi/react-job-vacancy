import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const DataForm = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { input } = state;
  const { handleInput, handleSubmit } = handleFunction;

  return (
    <div className="mx-10 my-10">
      <div className=" mt-8 mb-2">
        <h1 className="text-xl font-bold">Create Form Data</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <label>Title</label>
          <input
            className="border-2 rounded-lg px-4 py-1 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleInput}
            value={input.title}
            name="title"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Description</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.job_description}
            name="job_description"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Qualification</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.job_qualification}
            name="job_qualification"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Job Type</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.job_type}
            name="job_type"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Job Tenure</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.job_tenure}
            name="job_tenure"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Job Status</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.job_status}
            name="job_status"
            type={"number"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Company Name</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.company_name}
            name="company_name"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Image Url</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.company_image_url}
            name="company_image_url"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Company City</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.company_city}
            name="company_city"
            type={"text"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Salary Min</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.salary_min}
            name="salary_min"
            type={"number"}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Salary Max</label>
          <input
            className="border-2 rounded-lg px-4 py-1"
            onChange={handleInput}
            value={input.salary_max}
            name="salary_max"
            type={"number"}
            required
          />
        </div>
        <input
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </form>
    </div>
  );
};

export default DataForm;
