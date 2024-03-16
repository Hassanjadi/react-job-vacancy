import React from "react";

export const HeroVacancy = () => {
  return (
    <section className="max-w-screen relative">
      <div className="pt-5 lg:w-full">
        <img
          src="https://i.ibb.co/bFJDX2w/Hero-Background.jpg"
          alt="Hero-Background"
          className="w-full h-64 lg:h-auto"
        />
      </div>
      <h1 className="absolute w-4/5 md:w-2/4 lg:w-1/2 top-32 left-4 font-extrabold text-2xl lg:top-44 md:left-16 lg:left-28 lg:text-[40px] text-[#635BFF] leading-tight">
        Search between more than 50.000 available jobs
      </h1>
    </section>
  );
};
