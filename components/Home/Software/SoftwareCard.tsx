import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description?: string;
};

const SoftwareCard = ({ image, title, description }: Props) => {
  return (
    <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg">
      <Image src={image} alt={title} width={50} height={50} />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-800 dark:text-gray-300 mt-3 font-medium">
        {description}
      </p>
      <button className="px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold hover:bg-blue-950 transition-all duration-200 cursor-pointer text-white">
        Read More
      </button>
    </div>
  );
};

export default SoftwareCard;
