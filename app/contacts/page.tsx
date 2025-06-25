import Contact from "@/components/contact";
import { Icons } from "@/lib/icons";
import React from "react";

export default function Page() {
  return (
    <div className=" mb-28 md:mb-[19rem] ">
      <div className="p-2 ml-2 md:ml-ppp12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">/</span>contacts
        </h1>
      </div>
      <div className=" ml-4 md:ml-14 text-[16px] text-white ">Who am i ? </div>
      <Contact set={false} />
      <div className="p-2 ml-2 md:ml-12 flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">#</span>all-media
        </h1>
      </div>
      <div className=" ml-2 md:ml-14 text-textprimary flex text-[12px] gap-2 ">
        <a href="https://github.com/Owuraku22" target="_blank" rel="noopener noreferrer">
          <Icons.GitHub className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="https://www.linkedin.com/in/owura-kwaku-safo-8277b7336/" target="_blank" rel="noopener noreferrer">
          <Icons.LinkedIn className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="https://x.com/AfriG_1" target="_blank" rel="noopener noreferrer">
          <Icons.Twiter className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
        <a href="https://www.instagram.com/african_god_/" target="_blank" rel="noopener noreferrer">
          <Icons.Instagram className="w-6 h-6 md:h-8 md:w-8 hover:text-textsecondary" />
        </a>
      </div>
    </div>
  );
}
