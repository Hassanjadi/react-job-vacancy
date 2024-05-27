import React from "react";
import { CardJobs } from "../Fragment/CardJobs";
import { HeroVacancy } from "../Fragment/HeroVacancy";
import { FooterClient } from "../Fragment/FooterClient";
import { NavbarClient } from "../Fragment/NavbarClient";
import { SearchVacancy } from "../Fragment/SearchVacancy";

export const VacancyLayout = () => {
  return (
    <>
      <NavbarClient />
      <HeroVacancy />
      <SearchVacancy />
      <section className="w-full bg-[#F9F9F9] pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <CardJobs />
        </div>
      </section>
      <FooterClient />
    </>
  );
};
