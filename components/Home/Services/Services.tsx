import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesList } from "@/constant/constant";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              Our Services
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-1">
              Provide you with the best software development services
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#_"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto">
              All Services
            </a>
          </div>
        </div>
        {/* services card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          {ServicesList.map((service) => (
            <div key={service.id}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
