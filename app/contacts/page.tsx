import Contact from "@/components/contact";
import { Icons } from "@/lib/icons";
import React from "react";

export default function Page() {
  return (
    <div className="mb-24">
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">/</span>contacts
        </h1>
      </div>
      <div className=" ml-4 md:ml-14 text-[16px] text-white ">Who am i ? </div>
      <Contact />
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">#</span>all-media
        </h1>
      </div>
      <div className=" ml-2 md:ml-14 text-textprimary flex text-[12px] gap-2 ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icons.GitHub className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icons.LinkedIn className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icons.Twiter className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icons.Instagram className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
      </div>
    </div>
  );
}
