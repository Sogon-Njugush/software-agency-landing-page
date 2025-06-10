import React from "react";
import SoftwareCard from "./SoftwareCard";
import { SoftwareList } from "@/constant/constant";

const Software = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        {/* subheading */}
        <h1 className="uppercase text-lg sm:text-lg md:text-2xl font-bold text-blue-700  dark:text-pink-500">
          Software
        </h1>
        {/* heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-1">
          Provide you with the best software <br /> development services
        </h1>
      </div>
      {/* cards */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        {
          // mapping cards
          SoftwareList.map((item) => (
            <div key={item.id}>
              <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <SoftwareCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Software;
