"use client";

import { useActiveTab } from "@/store";
import Image from "next/image";
import Link from "next/link";

function Profile() {
  const { setActiveTab } = useActiveTab();
  return (
    <div className="container px-10 md:px-18 mx-auto flex flex-col md:flex-row gap-4 mt-[3rem] md:mt-[10rem] h-auto ">
      <div className="flex-1 flex flex-col gap-4 h-auto">
        <div className="font-semibold text-[32px] text-white">
          Safo is a <span className="text-[#C778DD]">backend developer</span>
        </div>
        <p className="font-normal text-[16px] text-[#ABB2BF] mt-4">
          He crafts responsive websites where technologies meet creativity
        </p>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contacts";
          }}
          href={"/contacts"}
          className="border text-white border-[#C778DD] py-2 px-4 w-fit"
        >
          Contact me !!
        </Link>
      </div>
      <div className="flex-1 relative w-full  min-h-[280px] sm:min-h-[300px] lg:min-h-[300px]">
        <Image
          src={"/profile.svg"}
          alt="profile"
          height={100}
          width={100}
          className="absolute w-100 h-100  md:w-100 md:h-100 -bottom-12 sm:-bottom-15 xl:-bottom-5 z-10 object-contain "
        />
        <Image
          src={"/squares.png"}
          alt="profile"
          height={100}
          width={100}
          className="absolute top-10 w-30 h-30 object-contain"
        />
        <div className="absolute bottom-0 flex items-center gap-2 bg-[#282C33] px-4 z-20 border w-[320px] sm:w-[380px] md:w-[300px] xl:w-[380px]">
          <div className="h-3 w-3 bg-[#C778DD]"></div>
          <p className="text-[16px] font-medium text-textprimary">
            Currently working on{" "}
            <span className="text-white  font-semibold">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
