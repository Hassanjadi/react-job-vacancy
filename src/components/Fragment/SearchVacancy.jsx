import React from "react";
import { Button } from "../Element/Button";
import { Input } from "../Element/Input/Input";

export const SearchVacancy = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:w-4/5 lg:w-3/5">
          <Input placeholder="Search for job" />
          <Input placeholder="Add country or city" />
          <Button classname="bg-[#635BFF] w-full md:w-1/2">Search</Button>
        </div>
      </div>
    </section>
  );
};
