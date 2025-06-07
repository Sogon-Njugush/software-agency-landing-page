import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseList } from "@/constant/constant";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* text context */}
        <div>
          {/* subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            Why Choose Us
          </p>
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 leading-[1.8rem] md:leading-[3rem]">
            Innovatoins Excellence in Building Digital Solutions
          </h1>
          {/* line */}
          <div className="mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700 "></div>
          {/* list type features */}
          <>
            {whyChooseList.map((item) => (
              <div key={item.id}>
                <WhyChooseCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </>
        </div>
        {/* image context */}
        <div>
          <Image
            src="/images/wc.png"
            alt="about"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
