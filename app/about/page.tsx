import AboutMe from "@/components/about";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">/</span>about-me
        </h1>
      </div>
      <div className=" ml-4 md:ml-14 text-[16px] text-white ">Who am i ? </div>
      <AboutMe />
    </div>
  );
}
