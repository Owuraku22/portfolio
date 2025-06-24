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
    <nav className="sticky top-0   bg-[#282C33]/80  z-30 container mx-auto flex items-center justify-between p-8  text-xl">
      <div className="text-white font-bold text-[16px] flex items-center gap-1">
        <Image src={"/logo.png"} alt="logo" width={60} height={60} /> Safo
      </div>

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
      <div className="flex md:hidden ">
        <Icons.Menu className="reverse" />
      </div>
    </nav>
  );
}
