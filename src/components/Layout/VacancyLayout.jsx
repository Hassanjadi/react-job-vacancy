import React from "react";
import { HeroVacancy } from "../Fragment/HeroVacancy";
import { NavbarClient } from "../Fragment/NavbarClient";
import { FooterClient } from "../Fragment/FooterClient";

export const VacancyLayout = () => {
  return (
    <>
      <NavbarClient />
      <HeroVacancy />
      <FooterClient />
    </>
  );
};
