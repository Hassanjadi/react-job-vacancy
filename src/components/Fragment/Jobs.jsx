import React from "react";
import { CardJobs } from "./CardJobs";
import { Link } from "react-router-dom";

export const Jobs = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6 items-center mb-10">
          <h1 className="text-5xl font-bold text-center">
            Discover the best jobs
          </h1>
          <p className="text-base text-center font-medium lg:w-1/2">
            Start your career with the best companies in the world. We ensure
            you get the best job possible
          </p>
        </div>
        <CardJobs limit={6} />
        <div className="flex justify-center items-center gap-1 mt-16">
          <p className="flex gap-2">Did not find what you’re looking for?</p>
          {""}
          <Link to="/job-vacancy" className="text-indigo-500">
            View all jobs
          </Link>
        </div>
      </div>
    </section>
  );
};
