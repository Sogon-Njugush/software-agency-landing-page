import Image from "next/image";
import React from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <div>
        {/* image */}
        <Image
          src={image}
          alt="image"
          width={400}
          height={400}
          className="rounded-lg w-full h-full"
        />
        {/* blog box */}
        <div className="w-[90%] mx-auto bg-gray-200 dark:bg-blue-900 rounded-lg mt-[-3rem] relative z-10 p-6">
          <div className="flex items-center space-x-2">
            <BiUser className="w-5 h-5" />
            <span className="md:text-lg text-base font-semibold">By Admin</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-4">{title}</h1>
          <span className="block w-full h-[2px] bg-gray-300 mt-6 mb-6"></span>
          <div className="flex items-center space-x-2 justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendar className="w-4 h-4" />
              <span className="md:text-lg text-base font-semibold">
                11 June 2025
              </span>
            </div>
            <div className="">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-col bg-blue-700 cursor-pointer hover:bg-blue-900 transition-all duration-200">
                <MdOutlineArrowOutward className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
