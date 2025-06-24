import Projects from "@/components/project";
import React from "react";

export default function Page() {
  return (
    <div className="mb-24">
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">/</span>projects
        </h1>
      </div>
      <div className=" ml-4 md:ml-14 text-[16px] text-white ">
        List of my projects{" "}
      </div>
      <Projects set={false} />
    </div>
  );
}
