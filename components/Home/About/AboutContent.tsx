import Image from "next/image";
import React from "react";

type Aboutprops = {
  image: string;
  title: string;
  description?: string;
};

const AboutContent = ({ image, title }: Aboutprops) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={image} alt={title} width={50} height={50} />
      <h1 className="text-lg sm:text-xl leading-5 font-bold">{title}</h1>
    </div>
  );
};

export default AboutContent;
