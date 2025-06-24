"use client";

import { Icons } from "@/lib/icons";
import { useActiveTab } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TopNav() {
  const { setActiveTab } = useActiveTab();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string>(pathname);
  const [menu, setMenu] = useState<boolean>(false);
  const navLinks = [
    { id: 1, name: "home", links: "/" },
    { id: 2, name: "works", links: "/work" },
    { id: 3, name: "about-me", links: "/about" },
    { id: 4, name: "contacts", links: "/contacts" },
  ];

  useEffect(() => {
    const valuesToRemove = ["/view_all", "/anotherValue", "/someOtherValue"];

    // Create a regular expression to match any of the values in the list
    const regex = new RegExp(valuesToRemove.join("|"), "g");

    // Remove all matching values from the activeMenu path
    const updatedPath = activeMenu.replace(regex, "");

    // Update the active menu with the cleaned-up path
    setActiveMenu(updatedPath);

    // if (pathIncludes) {
    //     setActiveMenu(updatedPath);
    // }
  }, [pathname, activeMenu]);

  const handleMenuClick = (name: string) => {
    setActiveMenu(name);
  };
  return (
    <div className="sticky top-0 z-30">
      {" "}
      <nav className="  bg-[#282C33]/80   container mx-auto flex items-center justify-between p-8  text-xl">
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          href={"/"}
          className="text-white font-bold text-[16px] flex items-center gap-1"
        >
          <Image src={"/logo.png"} alt="logo" width={60} height={60} /> Safo
        </Link>

        <div className="space-x-8 hidden md:flex  ">
          {navLinks.map(({ id, name, links }) => (
            <Link
              onClick={() => {
                setActiveTab(name), handleMenuClick(links);
              }}
              key={id}
              href={links}
              className={`hover:underline  hidden md:inline-block ${
                activeMenu === links
                  ? "text-white font-medium"
                  : "text-[#ABB2BF] font-normal"
              }`}
            >
              <span className="text-[#C778DD]">#</span> {name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setMenu(!menu)}
          className="flex md:hidden text-textprimary "
        >
          {menu ? (
            <Icons.Close className="reverse" />
          ) : (
            <Icons.Menu className="reverse" />
          )}
        </div>
      </nav>
      {menu && (
        <div className="bg-transparent  rounded-2xl h-fit w-full flex md:hidden justify-between flex-row ">
          <div className="flex p-6"></div>
          <div className="flex flex-col">
            {" "}
            {navLinks.map(({ id, name, links }) => (
              <Link
                key={id}
                href={links}
                onClick={() => {
                  setActiveTab(name);
                  handleMenuClick(links);
                  setMenu(false);
                }}
                className={`p-4 rounded hover:bg-gray-100 ${
                  activeMenu === links
                    ? "text-white font-bold"
                    : "text-textprimary"
                }`}
              >
                <span className="text-[#C778DD]">#</span> {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
