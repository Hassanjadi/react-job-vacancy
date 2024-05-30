import React from "react";
import Bri from "../../assets/images/Bri.png";
import Gojek from "../../assets/images/Gojek.png";
import Tiket from "../../assets/images/Tiket.png";
import Shopee from "../../assets/images/Shopee.png";
import Sanbercode from "../../assets/images/Sanbercode.png";

export const JobPartner = () => {
  return (
    <section className="w-full bg-[#F3F3F3] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-center font-medium text-lg text-[#676767] mb-16">
          Trusted by 100+ world’s best companies
        </h1>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          <div className="flex justify-center items-center">
            <img src={Sanbercode} alt="Sanbercode" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Gojek} alt="Gojek" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Tiket} alt="Tiket" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Bri} alt="BRI" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Shopee} alt="Shopee" />
          </div>
        </div>
      </div>
    </section>
  );
};
