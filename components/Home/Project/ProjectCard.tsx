import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const ProjectCard = ({ image }: Props) => {
  return (
    <div>
      <Image src={image} alt={image} width={500} height={500} />
    </div>
  );
};

export default ProjectCard;
