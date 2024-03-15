import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export const FooterClient = () => {
  return (
    <div class="w-full px-4 lg:px-24 py-5 items-center bg-[#F9F9F9]">
      <hr className="mb-6" />
      <div class="flex flex-col justify-between items-center mx-auto lg:flex-row lg:container">
        <p class="text-base font-medium text-[#525E76] mb-4 lg:mb-0">
          &#169;2023 LokerIn by Hassanjadi
        </p>
        <div class="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div class="flex  gap-2 lg:flex-row lg:gap-4">
            <a href="#" class="text-base font-medium text-[#525E76]">
              Terms
            </a>
            <a href="#" class="text-base font-medium text-[#525E76]">
              Privacy
            </a>
            <a href="#" class="text-base font-medium text-[#525E76]">
              Legal
            </a>
          </div>
          <div class="flex flex-row justify-center gap-4">
            <a href="#" class="text-[#525E76]">
              <FeatherIcon icon="github" fill="#525E76" stroke="#525E76" />
            </a>
            <a href="#" class="text-[#525E76]">
              <FeatherIcon icon="linkedin" fill="#525E76" stroke="#525E76" />
            </a>
            <a href="#" class="text-[#525E76]">
              <FeatherIcon icon="twitter" fill="#525E76" stroke="#525E76" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
