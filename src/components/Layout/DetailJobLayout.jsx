import React from "react";
import { CardApply } from "../Fragment/CardApply";
import { CardDetail } from "../Fragment/CardDetail";
import { NavbarClient } from "../Fragment/NavbarClient";
import { FooterClient } from "../Fragment/FooterClient";

export const DetailJobLayout = () => {
  return (
    <>
      <NavbarClient />
      <div className="h-[350px] bg-[#635BFF] w-full"></div>
      <section className="w-full bg-[#F9F9F9] ">
        <div className="container mx-auto flex justify-between px-4 md:px-8 lg:px-16">
          <CardDetail />
          <CardApply />
        </div>
      </section>
      <FooterClient />
    </>
  );
};
