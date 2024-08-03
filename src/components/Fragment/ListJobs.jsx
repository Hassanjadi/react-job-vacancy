import React from "react";
import { useJobs } from "../../context/JobContext";

export const ListJobs = () => {
  const { jobs, handleDelete } = useJobs();

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Qualification
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Tenure
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Images
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary Min
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary Max
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {jobs !== null &&
              jobs.map((job, index) => {
                return (
                  <tbody key={index}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {job.title}
                      </th>
                      <td className="px-6 py-4 line-clamp-2">
                        {job.job_description}
                      </td>
                      <td className="px-6 py-4">{job.company_name}.</td>
                      <td className="px-6 py-4 line-clamp-2">
                        {job.job_qualification}
                      </td>
                      <td className="px-6 py-4">{job.job_type}</td>
                      <td className="px-6 py-4">{job.job_tenure}</td>
                      <td className="px-6 py-4">{job.job_status}</td>
                      <td className="px-6 py-4">{job.company_image_url}</td>
                      <td className="px-6 py-4">{job.company_city}</td>
                      <td className="px-6 py-4">{job.salary_min}</td>
                      <td className="px-6 py-4">{job.salary_max}</td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        >
                          Remove
                        </button>
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};
