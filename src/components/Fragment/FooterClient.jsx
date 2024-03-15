import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

export const FooterClient = () => {
  return (
    <div class="w-full py-5 bg-[#F9F9F9]">
      <hr className="mb-6" />
      <div class="container mx-auto px-4 md:px-8 lg:px-16 ">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <p class="text-base font-medium text-[#525E76] mb-4 lg:mb-0">
            &#169;2023 LokerIn by Hassanjadi
          </p>
          <div class="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div class="flex  gap-2 lg:flex-row lg:gap-4">
              <Link to="#" class="text-base font-medium text-[#525E76]">
                Terms
              </Link>
              <Link to="#" class="text-base font-medium text-[#525E76]">
                Privacy
              </Link>
              <Link to="#" class="text-base font-medium text-[#525E76]">
                Legal
              </Link>
            </div>
            <div class="flex flex-row justify-center gap-4">
              <Link to="#" class="text-[#525E76]">
                <FeatherIcon icon="github" fill="#525E76" stroke="#525E76" />
              </Link>
              <Link to="#" class="text-[#525E76]">
                <FeatherIcon icon="linkedin" fill="#525E76" stroke="#525E76" />
              </Link>
              <Link to="#" class="text-[#525E76]">
                <FeatherIcon icon="twitter" fill="#525E76" stroke="#525E76" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
