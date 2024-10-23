import React from "react";
import heroimage from "../assets/profilepic12.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className=" col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="" hero image />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a </span> <br />
          <TypeAnimation
            sequence={["frontend Dev", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Bharathwaj and I have 1+ years of experience in web
          development.
        </p>
        <div className="my-8">
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/bharathwaj-rr-021ab4236/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
