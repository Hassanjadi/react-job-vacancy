import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Checklist from "../../assets/icon/Checklist.svg";
import ImageBanner from "../../assets/images/Image-banner.png";
import Sanber from "../../assets/images/Sanber.png";
import Gojek from "../../assets/images/Gojek.png";
import Tiket from "../../assets/images/Tiket.png";
import Bri from "../../assets/images/Bri.png";
import Shopee from "../../assets/images/Shopee.png";
import Login from "../../assets/images/Login.svg";
import Resume from "../../assets/images/Resume.svg";
import Job from "../../assets/images/Job.svg";
import Arrow from "../../assets/icon/Arrow.svg";
import Switch from "../../assets/images/Switch.svg";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;

  const { handleText, handleSalary, handleTime } = handleFunction;

  return (
    <div className="container-lg">
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-16 mx-4 lg:mx-24 my-32">
        <div className="w-full justify-center lg:w-2/4">
          <img src={ImageBanner} alt="Vector" />
        </div>
        <div className="flex-col w-full lg:w-2/4 justify-center">
          <div>
            <p className="font-bold text-4xl mb-6">
              The best place to find your dream job
            </p>
            <p>
              Find job you love and research the fastest-growing companies, and
              hire experienced workers.
            </p>
          </div>
          <div className="flex justify-center border rounded-lg py-1 px-1 w-11/12 mt-6">
            <input
              className="pl-1 w-4/5 border-none focus:border-none outline-none"
              name="search"
              type="text"
              placeholder="Job title"
            />
            <button
              className="py-1 px-3 rounded-lg border bg-indigo-400 text-white text-base font-medium"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex gap-2 items-center">
              <img src={Checklist} alt="Icon" />
              <p>Easy to setup</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={Checklist} alt="Icon" />
              <p>Complete job vacancies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg w-full bg-gray-100">
        <div className="mx-4 lg:mx-24 py-16">
          <p className="text-center mb-10">
            Trusted by 100+ world’s best companies
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-between">
            <img src={Sanber} alt="Sanbercode" className="mb-4 lg:mb-0" />
            <img src={Gojek} alt="Gojek" className="mb-4 lg:mb-0" />
            <img src={Tiket} alt="Tiket.com" className="mb-4 lg:mb-0" />
            <img src={Bri} alt="Bank BRI" className="mb-4 lg:mb-0" />
            <img src={Shopee} alt="Shopee" className="mb-4 lg:mb-0" />
          </div>
        </div>
      </div>

      <div className="container-lg w-full">
        <div className="py-16 px-4 lg:px-24">
          <div>
            <p className="text-3xl text-center font-bold mb-2">
              Getting started is easy
            </p>
            <p className="text-center text-base mb-6">
              Create a profile and we'll match you with the best your dream
              <br />
              companies and jobs in the world.
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center p-4 lg:p-10 bg-blue-100 rounded-xl">
            <div className="w-full lg:w-1/2 lg:order-last">
              <p className="font-extrabold text-xl lg:text-2xl mb-2">01</p>
              <p className="font-bold text-xl lg:text-2xl mb-2">
                Register to hire up or login
              </p>
              <p className="text-base">
                It’s totally free! You can just register if you’re new on hire
                up, follow simple registration steps and you’re ready to get
                started! If you're already a member, just sign in!
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:order-first mb-4 lg:mb-0">
              <img
                src={Login}
                alt="Illustration"
                className="w-full max-w-sm lg:w-auto"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <div className="bg-indigo-100 w-full lg:w-1/2 rounded-xl p-4 lg:p-10">
              <div className="flex justify-center mb-4 lg:mb-6">
                <img src={Resume} alt="Upload Resume" />
              </div>
              <div>
                <p className="font-extrabold text-xl lg:text-2xl mb-2">02</p>
                <p className="font-bold text-xl lg:text-2xl mb-2">
                  Upload your last resume
                </p>
                <p className="text-base">
                  Upload your latest resume to help us find perfect jobs that
                  match with your background. Our AI will do that, but you can
                  still customize the search.
                </p>
              </div>
            </div>
            <div className="bg-cyan-100 w-full lg:w-1/2 rounded-xl p-4 lg:p-10">
              <div className="flex justify-center mb-4 lg:mb-6">
                <img src={Job} alt="Match Job" />
              </div>
              <div>
                <p className="font-extrabold text-xl lg:text-2xl mb-2">03</p>
                <p className="font-bold text-xl lg:text-2xl mb-2">
                  Find your matches job
                </p>
                <p className="text-base">
                  We ease your job searching by providing several jobs that
                  match with your resume. Browse them and customize as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg w-full bg-gray-100">
        <div className="py-16 px-4 lg:px-24">
          <div>
            <p className="text-3xl text-center font-bold mb-2">
              Discover the best job.
            </p>
            <p className="text-center text-base mb-6">
              Start your career with the best companies in the world. We ensure
              you get the best job possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data !== null &&
              data.map((res) => {
                return (
                  <div className="bg-white px-4 py-8 rounded-xl" key={res.id}>
                    <div className="flex gap-4">
                      <div className="flex justify-center items-center bg-gray-100 w-16 h-16 p-1 rounded-lg">
                        <img
                          src={res.company_image_url}
                          alt="Google"
                          className="h-full w-10 h-10 overflow-hidden"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold mb-2">{res.title}</p>
                        <div className="flex gap-2 text-sm font-semibold text-gray-400">
                          <p>{handleText(res.company_name, 9)}</p>&bull;
                          <p>{handleText(res.company_city, 9)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                        {handleText(res.job_tenure, 6)}
                      </p>
                      <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                        {res.job_type}
                      </p>
                      <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600 text-sm">
                        {res.job_status === 0 ? "Close" : "Open"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs mt-2 h-10">
                        {handleText(res.job_description, 100)}
                      </p>
                    </div>
                    <div className="flex gap-2 text-xs font-semibold mt-6">
                      <p className="text-gray-400">
                        {handleTime(res.created_at)}
                      </p>
                      &bull;
                      <p>{handleSalary(res.salary_max)}/month</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center items-center gap-1 py-6">
            <p className="flex gap-2">
              Did not find what you’re looking for?
              <Link to="/vacancy">
                <span className="text-indigo-500">View all jobs</span>
              </Link>
            </p>
            <img src={Arrow} alt="Arrow Right" />
          </div>
        </div>
      </div>
      <div className="container-lg w-full py-16 px-4 lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-end gap-4 lg:gap-10 px-4 lg:px-10 py-6 bg-indigo-500 rounded-xl">
          <div className="w-full lg:w-1/2 lg:order-last">
            <p className="text-3xl font-bold mb-4 text-white">
              Set up personalized job search alerts
            </p>
            <div className="flex gap-1">
              <Link
                to="/register"
                className="px-3 py-2 bg-white rounded-lg font-medium text-sm text-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:order-first flex justify-center">
            <img
              src={Switch}
              alt="Illustration"
              className="w-full max-w-sm lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
