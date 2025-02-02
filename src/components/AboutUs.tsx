import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="p-14">
      <h1 className="font-medium text-4xl">About Us</h1>
      <p className="text-left mt-5 font-medium text-2xl">
        We make sure your idea <br /> & creation is delivered <br /> properly
      </p>

      <div className="grid sm:grid-cols-2 gap-6 grid-cols-1 py-8">
        <div className="w-full relative flex flex-col h-[55vh]">
          <Image
            src={"/images/teamates.png"}
            alt="teammates"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full flex flex-col h-[55vh]">
          <p className="font-medium text-base">
            We are a team of innovators, strategists, and problem-solvers <br />
            passionate about redefining the way projects are managed. <br />
            <br /> Our goal is to empower teams with technology-driven solutions
            that enhance productivity, foster collaboration, and deliver
            impactful results <br />
            <br /> our core, we are builders of efficient systems and creators
            of innovative tools. We believe that every project has the potential
            to transform ideas into extraordinary achievements, and we’re here
            to make that journey seamless and successful. <br />
            <br /> We are more than a tech company; we are a partner in your
            growth. Our focus is on helping you overcome challenges, optimize
            processes, and achieve your goals with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
