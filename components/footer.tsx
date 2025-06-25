import { Icons } from "@/lib/icons";
import React from "react";

export default function Footer() {
  return (
    <div className=" w-full">
      <div className="border-b-2 border-textprimary w-full mb-4"></div>

      <div className="container max-w-[1240px] mx-auto md:px-8 mb-[2rem]">
        <div className="w-full flex md:flex-row flex-col justify-between gap-4 p-2">
          <div className="flex flex-col gap-2  text-[16px] font-medium text-white">
            <h1 className="">
              Owura kwaku Safo{" "}
              <a href="mailto:owurakwaku758@gmail.com" className="text-textprimary ml-4">Owurakwaku758@gmail.com</a>
            </h1>
            <span className="font-normal text-wrap">
              {" "}
            Backend Developer | Full Stack Developer | Software Engineer
            </span>
          </div>
          <div className="flex flex-row md:flex-col gap-4 text-[16px] font-medium text-textprimary items-center">
            <h1 className="text-white text-[24px] font-medium">Media</h1>
            <div className="flex text-[12px] gap-2 ">
              <a href="https://github.com/Owuraku22" target="_blank" rel="noopener noreferrer">
                <Icons.GitHub className="h-5 w-5 hover:text-textsecondary" />
              </a>
              <a href="https://www.linkedin.com/in/owura-kwaku-safo-8277b7336/" target="_blank" rel="noopener noreferrer">
                <Icons.LinkedIn className="h-5 w-5 hover:text-textsecondary" />
              </a>
              <a href="https://x.com/AfriG_1" target="_blank" rel="noopener noreferrer">
                <Icons.Twiter className="h-5 w-5 hover:text-textsecondary" />
              </a>
              <a href="https://www.instagram.com/african_god_/" target="_blank" rel="noopener noreferrer">
                <Icons.Instagram className="h-5 w-5 hover:text-textsecondary" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full  text-textprimary flex items-center font-normal text-[12px] md:text-[16px] mt-2 justify-center">
          © Copyright 2025. Build by Owura Kwaku Safo 
        </div>
      </div>
    </div>
  );
}
