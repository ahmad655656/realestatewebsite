"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ استيراد الموديولات
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const comments = [
  {
    name: "Alex Perker",
    content:
      "Stephanies design transformed our house into a home. Her attention to detail and keen eye for aesthetics created a space that truly reflects our style and personality. We couldnt be happier with the result!",
  },
  {
    name: "Sarah and John",
    content:
      "Working with Stephanie was a breeze! Her professionalism and expertise made the entire design process seamless. Our office now exudes creativity and productivity, thanks to her innovative design solutions.",
  },
  {
    name: "Emaily and David",
    content:
      "Stephanies consultation was invaluable. Her insightful advice and recommendations helped us kickstart our home renovation project with confidence. Were thrilled with the outcome!",
  },
];
const PhotoSection = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center ">
      <div className="w-full flex flex-row items-center h-[30%] ">
        <div className="flex flex-col items-center justify-center bg-[#c4904c] h-[400px] w-[50%] ">
          <h1 className="text-[30px] text-white font-bold uppercase ">
            Interior design chronicles
          </h1>
          <p className="text-[15px] text-white text-center font-bold uppercase ">
            My Journey Through Inspirational Spaces, Featuring Some Recently
            Designed Corners.
          </p>
        </div>
        <div className="w-[50%] h-[400px] relative ">
          <Image
            src={"/assets/img4.jpg"}
            alt="img1"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center  h-[30%]">
        <div className="w-[50%] h-[400px] relative ">
          <Image
            src={"/assets/img5.jpg"}
            alt="img1"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[50%] h-[400px] relative ">
          <Image
            src={"/assets/img6.jpg"}
            alt="img1"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center  h-[30%]">
        <div className="w-[50%] h-[400px] relative ">
          <Image
            src={"/assets/img7.jpg"}
            alt="img1"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[50%] h-[400px] relative ">
          <Image
            src={"/assets/img8.jpg"}
            alt="img1"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <motion.div variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="w-full p-2 md:p-10 min-h-[50vh] ">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="md:w-[70%] w-[90%]"
        >
          {comments.map((comment, index) => {
            return (
              <SwiperSlide key={index} className="mb-5">
                <div className="flex flex-col items-center gap-4 md:gap-7 justify-center max-w-full p-5 md:p-10 mx-auto sm:mx-0">
                  <h1 className="text-white text-[25px]  ">
                    {comment.name}
                  </h1>
                  <p className="text-[15px] md:text-[25px] sm:pb-3 uppercase text-gray-50 font-medium text-center ">
                    {comment.content}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
     <div
  style={{
    backgroundImage: 'url("https://hosting.renderforestsites.com/5699226/1163817/media/f724bf61b778fa087460e6cefc740dad.jpg")',
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
  className="w-full h-[50vh] flex items-center justify-center"
>
  <h1 className="text-[30px] uppercase text-center font-bold text-white">
    Lets craft dreams into interiors
  </h1>
</div>
    </div>
  );
};

export default PhotoSection;
