"use client";

import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

function AboutMe({ set }: { set: boolean }) {
  return (
    <div className="container mx-auto md:px-8 my-[3rem]">
      {set == true && (
        <div className="p-2  flex w-full items-center">
          <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
            <span className="text-textsecondary ">#</span>about-me
          </h1>
          <div className="border-b border-textsecondary w-[22rem]"></div>
        </div>
      )}
      <div className="relative flex flex-col-reverse md:flex-row flex-2 px-4  ">
        <div className="flex flex-1 flex-col gap-4 text-[16px] font-normal text-textprimary">
          <span>Hello, i’m Owura Kwaku Safo!</span>
          <span>
            Backend Developer with 2+ years of experience building APIs using Laravel, 
            Golang, and Python. Quick to learn and apply new technologies, with a strong focus on performance, usability,
            and maintainability. Notable work includes a supporting-ticketing-system, an e-commerce platform, and admin dashboards.
          </span>
          <span>
            I’m committed to continuous learning and staying updated with new technologies to expand my skill set.
            I’m eager to collaborate on exciting projects with other great minds and take on new challenges. 
            If you have questions or simply want to connect, don’t hesitate to reach out. I’m looking forward to meeting you!
          </span>
          {set == true && (
            <Link
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/about";
              }}
              href={"/about"}
              className="text-white mt-8 font-medium flex gap-1 border border-textsecondary py-2 px-4 w-fit"
            >
              Read more <Icons.ForwardArrow />
            </Link>
          )}
        </div>
        <div className="relative flex flex-1 flex-col gap-4 ">
          <div className="absolute z-50 left-5 -top-25 grid grid-cols-5 gap-4  place-items-center  w-fit mt-8 ml-8 h-fit">
            {[...Array(25).keys()].map((index) => (
              <div
                key={index}
                className="h-1 w-1 bg-[#ABB2BF] rounded-full"
              ></div>
            ))}
          </div>
          <div className="absolute z-50 top-30 left-50 grid grid-cols-5 gap-4  place-items-center  w-fit mt-8 ml-8 h-fit">
            {[...Array(25).keys()].map((index) => (
              <div
                key={index}
                className="h-1 w-1 bg-[#ABB2BF] rounded-full"
              ></div>
            ))}
          </div>
          <Image
            src={"/full.svg"}
            alt="profile"
            height={100}
            width={100}
            className="md:absolute border-b border-textsecondary  mb-8 -top-20 w-100 h-100  lg:w-100 lg:h-100  md:w-90 md:h-90 -bottom-10 sm:-bottom-15 xl:-bottom-5 z-10 object-contain "
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
