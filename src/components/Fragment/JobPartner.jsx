import React from "react";

export const JobPartner = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-center font-medium text-lg text-[#676767] mb-16">
          Trusted by 100+ world’s best companies
        </h1>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co/YpRzPyS/Sanbercode.png"
              alt="Sanbercode"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/NnjSmHX/Gojek.png" alt="Gojek" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/gRmvNvM/Tiket.png" alt="Tiket" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/h1RtJgh/BRI.png" alt="BRI" />
          </div>
          <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/LYG69pz/Shopee.png" alt="Shopee" />
          </div>
        </div>
      </div>
    </section>
  );
};
