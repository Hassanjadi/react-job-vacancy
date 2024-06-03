import React from "react";
import Login from "../../assets/images/Login.png";
import Upload from "../../assets/images/Upload.png";
import Matches from "../../assets/images/Matches.png";

export const GettingStarted = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6 items-center mb-10">
          <h1 className="text-5xl font-bold text-center">
            Getting started is easy
          </h1>
          <p className="text-base text-center font-medium lg:w-1/2">
            Create a profile and we'll match you with the best your dream
            companies and jobs in the world.
          </p>
        </div>
        <div className="p-6 bg-[#E5EDFB] rounded-xl lg:p-16">
          <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center">
            <div className="flex justify-center items-center lg:w-2/5">
              <img src={Login} alt="Illustration" />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-3/5">
              <h1 className="font-black text-2xl">01</h1>
              <h2 className="font-bold text-2xl">
                Register to hire up or login
              </h2>
              <p className="text-base text-justify font-medium lg:w-10/12">
                It’s totally free! You can just register if you’re new on hire
                up, follow simple registration steps and you’re ready to get
                started! If you're already a member, just sign in!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="p-6 bg-[#E6E6F9] rounded-xl lg:p-16 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <img src={Upload} alt="Upload-Resume" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-black text-2xl">02</h1>
                <h2 className="font-bold text-2xl">Upload your last resume</h2>
                <p className="text-base text-justify font-medium">
                  Upload your latest resume to help us find perfect jobs that
                  match with your background. Our AI will do that, but you can
                  still customize the search.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#E5FBF2] rounded-xl lg:p-16 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <img src={Matches} alt="Find-Job" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-black text-2xl">03</h1>
                <h2 className="font-bold text-2xl">Find your matches job</h2>
                <p className="text-base text-justify font-medium">
                  We ease your job searching by providing several jobs that
                  match with your resume. Browse them and customize as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
