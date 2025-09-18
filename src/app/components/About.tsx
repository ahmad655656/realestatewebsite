import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../public/assets/variants";

const About = () => {
  return (
    <div id="about" className="w-full md:p-15 p-8 second_background min-h-[100vh] flex flex-col md:flex-row items-center gap-5 ">
      <motion.div variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="md:w-[50%] w-full  ">
        <Image src={"/assets/girl.jpg"} alt="img" width={600} height={600} />
      </motion.div>
      <motion.div variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="md:w-[50%] w-full flex flex-col items-start gap-5 ">
        <h1 className="text-white text-[25px] md:text-[40px] uppercase font-bold ">
          Get to know me well
        </h1>
        <p className="text-[15px] color_link ">Stephanie Smith</p>
        <p className="text-white">
          Hello, I'm Stephanie Smith, your dedicated real estate partner
          committed to helping you achieve your property goals. With a profound
          passion for real estate and a commitment to excellence, I offer a
          wealth of knowledge and expertise to every client interaction."
        </p>
        <p className="text-white">
          My personalized approach ensures that each home search or sale is
          meticulously tailored to meet your unique needs and aspirations.
          Whether you're a first-time buyer, seasoned investor, or seeking to
          sell your property, rest assured, I prioritize professionalism and
          integrity to ensure a seamless and rewarding experience. Let's
          collaborate to navigate the dynamic real estate market and transform
          your property aspirations into successful outcomes.{" "}
        </p>
        <p className="text-white flex flex-col items-start gap-3">
          <span className="text-white text-[20px] font-medium ">Stephanie Smith</span>
          Your trusted real estate representant
        </p>
      </motion.div>
    </div>
  );
};

export default About;
