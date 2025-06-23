"use client";

import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopNav() {
  const navLinks = [
    { id: 1, name: "home", links: "/" },
    { id: 2, name: "works", links: "/work" },
    { id: 3, name: "about-me", links: "/about" },
    { id: 4, name: "contacts", links: "/contacts" },
  ];
  return (
    <nav className="sticky top-0   bg-[#282C33]/80  z-30 container mx-auto flex items-center justify-between p-8  text-xl">
      <div className="text-white font-bold text-[16px] flex items-center gap-1">
        <Image src={"/logo.png"} alt="logo" width={60} height={60} /> Safo
      </div>

      <div className="space-x-8 hidden md:flex  ">
        {navLinks.map(({ id, name, links }) => (
          <Link
            key={id}
            href={links}
            className="hover:underline text-[#ABB2BF] hidden md:inline-block"
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
