import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import React from "react";

export default function Page() {
  return (
    <div className="mb-[12rem]">
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">/</span>about-me
        </h1>
      </div>
      <div className=" ml-4 md:ml-14 text-[16px] text-white ">Who am i ? </div>
      <AboutMe set={false} />
      <div className="mt-12 border border-transparent">
        <Skills set={false} />
      </div>
    </div>
  );
}
