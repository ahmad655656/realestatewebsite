import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { fadeIn } from "../../../public/assets/variants";

const cards = [
  {
    image: "/assets/img1.jpg",
    title: "Interior design from scratch",
    description:
      "Transform your space into a personalized masterpiece with our comprehensive interior design services. From conceptualization to execution, well work closely with you to bring your vision to life, ensuring every detail reflects your unique style and personality.",
  },
  {
    image: "/assets/img2.jpg",
    title: "Redesign your house",
    description:
      "Revitalize your existing space with our expert interior redesign services. Whether youre looking to update a single room or transform your entire home, well breathe new life into your surroundings, maximizing functionality and aesthetic appeal.",
  },
  {
    image: "/assets/img3.jpg",
    title: "Free consultation",
    description:
      "Begin your design journey with a complimentary consultation. Lets discuss your ideas, goals, and budget, and explore how our services can help you achieve the home of your dreams. No obligations, just expert advice tailored to your needs.",
  },
];
const Services = () => {
  return (
    <div id="services" className="w-full min-h-[100vh] p-10 flex flex-col items-center gap-5 ">
      <motion.h1 variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="text-[30px] uppercase text-white font-bold ">
        Services i offer
      </motion.h1>
      <motion.p variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="text-[20px] text-center text-white font-medium ">
        Elevating your home experience: Tailored interior design solutions and
        expert consultation
      </motion.p>
      <div className="w-full flex flex-col md:flex-row items-center gap-3 md:p-10 ">
      {cards.map((item, index) => {
        return (
            <span key={index}>
              <Card image={item.image} description={item.description} title={item.title} />
            </span>
        );
    })}
    </div>
    </div>
  );
};

export default Services;
