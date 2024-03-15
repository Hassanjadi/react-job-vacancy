import { Input } from "../Element/Input/Input";
import { Button } from "../Element/Button";

export const Hero = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse mx-auto md:pt-16 lg:pt-32 lg:flex-row">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-5xl w-full">
                The best place to find your dream job
              </h1>
              <p className="font-medium text-base w-full">
                Find job you love and research the fastest-growing companies,
                and hire experienced workers.
              </p>
            </div>
            <div className="flex gap-4 items-center lg:w-5/6">
              <Input placeholder="Search Job" />
              <Button classname="bg-[#635BFF]">Search</Button>
            </div>
            <div className="w-full flex gap-6 md:justify-center">
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6">
                  <img
                    src="https://i.ibb.co/qgz3wrd/Checklist.png"
                    alt="Checklist"
                    className="w-full h-full"
                  />
                </div>
                <p className="font-medium text-base">Easy to setup</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src="https://i.ibb.co/qgz3wrd/Checklist.png"
                    alt="Checklist"
                    className="w-full h-full"
                  />
                </div>
                <p className="font-medium text-base">Complete job vacancies</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <div>
              <img
                src="https://i.ibb.co/3MdtVVQ/illustration-jumbotron.png"
                alt="illustration-jumbotron"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
