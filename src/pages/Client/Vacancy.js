import Banner from "../../assets/images/Banner.png";
import Ornamen from "../../assets/images/Ornamen.png";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const Vacancy = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { handleText, handleSalary, handleTime } = handleFunction;

  return (
    <div className="container-lg bg-gray-100 pb-24">
      <div className="my-6 lg:my-16 relative">
        <img src={Banner} alt="Banner" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-25 bg-black">
          <div className="text-center">
            <p className="text-lg lg:text-5xl font-bold text-indigo-500">
              Search between more than <br /> 50,000 available jobs
            </p>
            <div className="mt-2 lg:mt-6">
              <img src={Ornamen} alt="Vector" className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mx-6 lg:mx-24 ">
        <input
          className="border-2 py-1 px-2 rounded-lg w-full lg:w-56 border-none focus:border-none outline-none"
          name="title"
          type="text"
          placeholder="Search for job"
          /* value={searchParams.title}
          onChange={handleInputChange} */
        />
        <input
          className="border-2 py-1 px-2 rounded-lg w-full lg:w-56 border-none focus:border-none outline-none"
          name="company_city"
          type="text"
          placeholder="Add country or city"
          /* value={searchParams.company_city}
          onChange={handleInputChange} */
        />
        <button
          /*  onClick={handleSearch} */
          className="py-1 px-3 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-400 w-full lg:w-auto"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-3 lg:mx-24 mt-10 gap-4">
        {data !== null &&
          data.map((res) => {
            return (
              <div className="bg-white px-4 py-8 rounded-xl" key={res.id}>
                <div className="flex gap-4" key={res.index}>
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
                  <p className="text-gray-400">{handleTime(res.created_at)}</p>
                  &bull;
                  <p>{handleSalary(res.salary_max)}/month</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Vacancy;
