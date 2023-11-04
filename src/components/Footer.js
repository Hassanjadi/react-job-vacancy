import React from "react";
import Github from "../assets/icon/Github.svg";
import LinkedIn from "../assets/icon/LinkedIn.svg";
import Twitter from "../assets/icon/Twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="container-lg border">
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 lg:mx-10">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p className="text-xs font-medium">@2023 LokerIn by Hassanjadi</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-4">
            <div className="flex gap-2 lg:gap-4">
              <p className="text-xs">Terms</p>
              <p className="text-xs">Privacy</p>
              <p className="text-xs">Legal</p>
            </div>
            <div className="flex gap-2 lg:gap-4">
              <img src={Github} alt="" className="w-5 h-5" />
              <img src={LinkedIn} alt="" className="w-5 h-5" />
              <img src={Twitter} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
