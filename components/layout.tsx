"use client";

import React, { ReactNode } from "react";
import Footer from "./footer";
import TopNav from "./topNav";
import { Icons } from "@/lib/icons";
import { useActiveTab } from "@/store";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setActiveTab, activeTab } = useActiveTab();
  console.log("Active Tab:", activeTab);
  return (
    <div>
      <div className="container mx-auto lg:flex flex-10 bg-[#282C33] border border-transparent">
        <div className="relative flex-1 bg-[#282C33]  h-fit hidden lg:flex flex-col justify-between">
          <div className="fixed top-0   ml-16  flex flex-col items-center justify-center gap-4">
            <div className="border-l border-[#ABB2BF] h-64"></div>

            <div className="flex flex-col gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icons.GitHub className="h-6 w-6 hover:text-textprimary" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icons.LinkedIn className="h-6 w-6 hover:text-textprimary" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icons.Twiter className="h-6 w-6 hover:text-textprimary" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icons.Instagram className="h-6 w-6 hover:text-textprimary" />
              </a>
            </div>
          </div>

          <div
            className={`absolute  left-0 right-0  grid grid-cols-2 gap-4  place-items-center px-16 ${
              activeTab == "home " ? "top-[45rem]" : "top-[30rem]"
            }`}
          >
            {[...Array(10).keys()].map((index) => (
              <div
                key={index}
                className="h-1 w-1 bg-[#ABB2BF] rounded-full"
              ></div>
            ))}
          </div>
          <div
            className={` absolute top-[43rem]  left-0  h-28 w-19 border-r border-t border-b border-[#ABB2BF]            }`}
          ></div>

          <div
            className={`absolute bottom-10 left-0 grid grid-cols-3 gap-4  place-items-center  ${
              activeTab == "home " ? " block" : "hidden"
            }`}
          >
            {[...Array(15).keys()].map((index) => (
              <div
                key={index}
                className="h-1 w-1 bg-[#ABB2BF] rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex-8 bg-[#282C33] h-fit ">
          <TopNav />
          {children}
        </div>

        <div className=" flex-1 relative bg-[#282C33]  h-fit hidden lg:flex flex-col justify-between  items-end">
          <div
            className={` absolute  right-0  h-28 w-20 border-l border-t border-b border-[#ABB2BF] ${
              activeTab == "home " ? "top-[45rem] " : "top-[10rem] "
            }`}
          ></div>

          <div className=" absolute top-[40rem]  right-0  h-46 w-20 border-l border-t border-b border-[#ABB2BF]"></div>

          <div className="absolute bottom-[20rem] right-0   grid grid-cols-3 gap-4  place-items-center ">
            {[...Array(15).keys()].map((index) => (
              <div
                key={index}
                className="h-1 w-1 bg-[#ABB2BF] rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto flex bg-[#282C33] ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
