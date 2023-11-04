import React from "react";

const About = () => {
  return (
    <div className="container-lg bg-gray-100 py-1">
      <div className="flex flex-col lg:flex-row md:justify-between md:flex justify-between gap-4 mb-8 mx-4 lg:mx-24 my-16 lg:my-32">
        <img
          src="https://c.pxhere.com/photos/df/13/team_corporate_people_group_office_company_business_colleagues-868210.jpg!d"
          alt="LokerIn Logo"
          className="w-full lg:w-1/2 mr-0 lg:mr-8 mb-4 lg:mb-0"
        />
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-4">
            Welcome to LokerIn
          </h1>
          <p className="text-gray-600">
            LokerIn is a leading job vacancy information service company. We are
            committed to helping job seekers find positions that match their
            skills and interests. With our platform, you can explore various job
            listings from different industries and locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
