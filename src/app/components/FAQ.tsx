import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../public/assets/variants";

const faq = [
  {
    title: "How much does your interior design service cost?",
    content:
      "I offer unqiue solutions based on the scope and scale of your project. During your free consultation, well discuss your budget and design goals to provide a tailored estimate.",
  },
  {
    title: "Do you offer virtual design consultations?",
    content:
      "Yes, understanding the importance of flexibility, especially in todays digital age, I offer virtual consultations to accommodate clients who prefer remote communication.",
  },
  {
    title: "What is the typical timeline for completing a design project?",
    content:
      "The timeline varies depending on the size and complexity of the project. Ill work closely with you to establish a realistic timeline and keep you informed at every stage.",
  },
  {
    title: "Can you assist with purchasing furniture and decor for my space?",
    content:
      "Absolutely! I have established relationships with trusted vendors and can assist you in selecting furniture, decor, and accessories that align with your design vision and budget.",
  },
];
const FAQ = () => {
  return (
    <div id="faq" className="w-full flex flex-col gap-5 py-15 items-center min-h-[100vh] ">
      <h1 className="md:text-[30px] text-[20px] text-center font-bold text-white uppercase ">
        Frequently asked questions
      </h1>
      <p className="text-white text-[20px] mb-4 ">We are here to help you!</p>
      <div className="flex flex-col mb-8 md:flex-row w-full gap-5 items-center justify-center flex-wrap">
        {faq.map((item, index) => {
          return (
            <motion.div variants={fadeIn("right", index/10)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }} className="md:w-[45%] w-[95%] flex flex-col gap-4 items-start ">
              <div className="w-full flex items-center gap-10 md:gap-5">
                <span className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-yellow-400 text-center text-white text-[15px] md:text-[20px] ">
                  ?
                </span>
                <span className="md:text-[17px] text-[11px] font-medium uppercase text-white ">
                  {item.title}
                </span>
              </div>
              <span className="text-[16px] ml-15 text-gray-300 ">
                {item.content}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://hosting.renderforestsites.com/5699226/1163817/media/2fad9f0f90da063288ff6117a1c493e1.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="w-full md:h-[100vh] h-[30vh] "
      ></div>
    </div>
  );
};

export default FAQ;
