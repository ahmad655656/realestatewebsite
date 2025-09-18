import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({image, title, description}: {image: string, title: string, description: string}) => {
  return (
    <div className="w-full relative bg-white">
      <Image 
        alt=""
        src={image} width={500} height={300}
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 className="mt-4 p-5 text-lg font-bold text-gray-900 sm:text-xl">
       {title}
      </h3>

      <p className="mt-2 px-5 pb-10 max-w-sm text-gray-700">
        {description}
      </p>
      <Link className="absolute flex gap-2 items-center right-3 bottom-3" href={"#"}><span>Get in touch</span> <IoIosArrowForward /></Link>
    </div>
  );
};

export default Card;
