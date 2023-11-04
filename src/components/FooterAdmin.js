import React from "react";
import Github from "../assets/icon/Github.svg";
import LinkedIn from "../assets/icon/LinkedIn.svg";
import Twitter from "../assets/icon/Twitter.svg";

const FooterAdmin = () => {
  return (
    <div className="container-lg border sticky bottom-0">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 md:mx-10">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xs font-medium">@2023 LokerIn by Hassanjadi</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2">
          <div className="flex gap-4">
            <p className="text-xs">Terms</p>
            <p className="text-xs">Privacy</p>
            <p className="text-xs">Legal</p>
          </div>
          <div className="flex gap-4">
            <img src={Github} alt="Github" className="w-6 h-6" />
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAdmin;
