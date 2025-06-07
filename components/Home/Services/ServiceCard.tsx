import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="p-6 cursor-pointer hover:bg-blue-800 transition-all duration-500 group relative bg-gray-100 dark:bg-blue-950 shadow rounded-xl">
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="object-contain"
      />
      <h1 className="text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500">
        {title}
      </h1>
      <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300">
        {description}
      </p>
      <div className="mt-6 text-xl font-medium flex item-center gap-1 group-hover:text-white transition-all duration-500">
        <span>Read More</span>
        <span>
          <GoArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
