import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Frontend Developer with 1.2 Years of Experience in web
              technologies with a strong focus on frontend development.
              Proficient in HTML, CSS, JavaScript, React, MUI, and Supabase, and
              have developed a range of applications tailored to business
              requirements
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
          alt="Bharath with a rounded border"
        />
      </div>
    </div>
  );
};

export default About;
