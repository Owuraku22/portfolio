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
          <span>Hello, i’m Elias!</span>
          <span>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </span>
          <span>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
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
