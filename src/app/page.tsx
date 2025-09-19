"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Consulation from "./components/Consulation";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PhotoSection from "./components/PhotoSection";
import Services from "./components/Services";
import { IoIosArrowDropup } from "react-icons/io";

export default function Home() {
  const [scrollY, setScrollY] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main_background min-h-[1000vh] relative w-full ">
      <Navbar />
      <FirstSection />
      <Services />
      <About />
      <PhotoSection />
      <FAQ />
      {scrollY ? (
        <IoIosArrowDropup
          onClick={() => {
            window.scrollTo(0, 0);
            
          }}
          className="fixed bottom-5 w-[50px] cursor-pointer h-[50px] right-7 md:right-5 color_link"
        />
      ) : (
        <IoIosArrowDropup className="hidden" />
      )}
      <Consulation />
      <Contact />
      <Footer />
    </div>
  );
}
