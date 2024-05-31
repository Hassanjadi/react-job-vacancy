import { Button } from "../Element/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobs.services";

export const CardDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    getDetailJob(id, (data) => {
      setJob(data);
    });
  }, [id]);

  return (
    <div className="bg-white w-2/3 -mt-44 rounded-xl p-6">
      <Button classname="bg-slate-200 text-gray-600">Back</Button>
      <div className="flex items-start gap-6 my-8">
        <div className="flex justify-center items-center bg-gray-100 max-w-[72px] min-h-[72px] p-4 rounded-lg">
          <img
            src={job.company_image_url}
            alt="Company Image"
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{job.company_name}</p>
          <p className="text-2xl font-semibold ">Need {job.title}</p>
        </div>
      </div>
      <hr />
      <div className="my-10">
        <h1 className="text-xl font-semibold ">Description</h1>
        <h2 className="text-lg font-semibold mt-8">Overview</h2>
        <p className="mt-4 text-base">{job.job_description}</p>
        <h2 className="text-lg font-semibold mt-8">Requirement</h2>
        <p className="mt-4 text-base">{job.job_qualification}</p>
      </div>
    </div>
  );
};
