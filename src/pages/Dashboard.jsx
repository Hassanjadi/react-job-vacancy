import FeatherIcon from "feather-icons-react";
import React from "react";

export const Dashboard = () => {
  return (
    <section className="h-screen bg-[#F9F9F9]">
      <div className="mx-10 py-8">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Holla Minca!</h1>
          <p className="text-xs">Nice to meet you again . . .</p>
        </div>
        <div className="px-6 py-6 bg-sky-100 w-64 rounded-lg">
          <div className="flex gap-4 items-center">
            <FeatherIcon icon="activity" size="40px" stroke="#635BFF" />
            <div>
              <h1 className="text-2xl font-bold text-[#635BFF]">200</h1>
              <p className="text-sm font-bold text-[#635BFF]">All Job</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
