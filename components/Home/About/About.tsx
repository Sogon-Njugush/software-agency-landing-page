import { AboutInfoList } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image contents */}
        <div className="">
          <Image
            src="/images/about.png"
            alt="about"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
        {/* text content  */}
        <div className="">
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            About Us
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]">
            Innovations Excellence in Building Digital Solutions
          </h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            We are a team of experienced developers who are passionate about
            creating innovative software solutions that meet the needs of our
            clients.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {AboutInfoList.map((item) => (
              <div key={item.id}>
                <AboutContent image={item.image} title={item.title} />
              </div>
            ))}
          </div>
          {/* button  */}
          <div className="mt-12">
            <a
              href="#_"
              className="w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto">
              About More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
