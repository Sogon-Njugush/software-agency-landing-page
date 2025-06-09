import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  image: string;
  userName: string;
  review: string;
  role: string;
  reviewTitle: string;
};

const ReviewCard = ({ image, userName, review, role, reviewTitle }: Props) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mr-4 shadow-md">
      <h1 className="text-2xl text-black font-bold">{reviewTitle}</h1>
      <div className="mt-2 flex items-center">
        <FaStar className="text-yellow-500 w-6 h-6" />
        <FaStar className="text-yellow-500 w-6 h-6" />
        <FaStar className="text-yellow-500 w-6 h-6" />
        <FaStar className="text-yellow-500 w-6 h-6" />
        <FaStar className="text-yellow-500 w-6 h-6" />
      </div>
      <p className="mt-4 text-base md:text-lg font-medium text-gray-800">
        {review}
      </p>
      <span className="block w-full h-[1px] bg-gray-300 mt-6 mb-6"></span>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={image}
            alt={userName}
            width={50}
            height={50}
            className="w-{60} h-{60} rounded-full"
          />
          <div>
            <h1 className="text-base sm:text-lg text-black md:text-xl font-bold">
              {userName}
            </h1>
            <p className="text-sm text-black sm:text-base md:text-lg">{role}</p>
          </div>
        </div>
        <div>
          <Image src={"/images/c4.png"} alt={"google"} width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
