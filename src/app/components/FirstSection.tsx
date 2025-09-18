'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import { AiFillHourglass } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const arrayNumber = [
  {
    icon: <FaUserFriends className="color_link text-[35px] md:text-[45px]  " />,
    num: 1500,
    text: "Satisfied clients",
  },
  {
    icon: <MdCloudDone className="color_link text-[35px] md:text-[45px]  " />,
    num: 3000,
    text: "Projects Done",
  },
  {
    icon: (
      <AiFillHourglass className="color_link text-[35px] md:text-[45px]  " />
    ),
    num: 10,
    text: "Years of Experience",
  },
];
const FirstSection = () => {
  return(
    <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col items-center w-full min-h-[200vh]">
      <div className="w-full items-center flex flex-col md:flex-row ">
        <div className="w-full md:w-[68%] ">
          <div className="w-full h-full p-10">
            <h1 className="md:text-[65px] text-[40px] sm:max-md:text-center line-clamp-2 text-white font-black uppercase   ">
              Interior design by Stephanie Smith
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[32%] border-l-2 border-l-gray-300   ">
          <div className="w-full h-full p-10">
            <p className="text-[20px] text-white mb-4 font-medium ">
              Ill help you redefine your space into a reflection of your unique
              style and personality. Together, lets infuse creativity,
              functionality, and elegance into every corner, crafting spaces
              that inspire and delight. Welcome to a partnership where your
              dream space becomes a shared masterpiece.
            </p>
            <Link
              href={"/"}
              className="color_link flex items-center gap-2 text-[15px] "
            >
              <span>Check Services</span>{" "}
              <IoIosArrowForward className="font-bold" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] md:h-[100vh] relative">
        <Image
          alt="img"
          src={"/assets/512f8908a8f1a970691d1ea66f4f4983.jpg"}
          fill
          className="object-cover inset-0"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full px-10 min-h-[100px] border-t-gray-300 border-t-[2px] flex flex-col md:flex-row md:items-center md:justify-between ">
          <h1 className="md:text-[25px] text-[20px] uppercase font-bold text-center p-5 text-white ">
            Lets craft something extraordinary together.
          </h1>
          <p className="text-[20px] text-gray-200 mb-4 ">Step inside!</p>
        </div>
        <div className="w-full flex flex-col gap-7 items-center md:flex-row md:justify-evenly min-h-[300px] p-4 second_background">
            {arrayNumber.map((item, index) => {
              return (
                <div className="flex flex-col items-center gap-2 md:gap-3" key={index}>
                  {item.icon}
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="color_link text-[30px] md:text-[40px] font-black "
                  />
                  <span className="text-white text-[15px] ">{item.text}</span>
                  <span className="w-[30px] h-[2px] bg-white "></span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
  );
};

export default FirstSection;
