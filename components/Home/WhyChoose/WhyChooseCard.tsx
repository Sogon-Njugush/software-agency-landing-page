import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const WhyChooseCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-8 mb-8">
      <div className="flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 rounded-full flex-col justify-center">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-800 dark:text-gray-300 w-[70%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
