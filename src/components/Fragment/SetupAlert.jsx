import React from "react";
import { Link } from "react-router-dom";

export const SetupAlert = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse gap-4 p-10 bg-[#635BFF] rounded-xl lg:flex-row lg:gap-16 lg:px-16">
          <div className="flex flex-col gap-6 lg:w-1/2 lg:justify-end">
            <p className="text-4xl font-semibold text-white">
              Set up personalized job search alerts
            </p>
            <Link
              to="/register"
              className="py-2 px-3 font-semibold text-base text-center rounded-md bg-white text-[#635BFF] lg:w-1/3"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src="https://i.ibb.co/WcbLGNP/Setup.png"
              alt="Illustration Setup"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
