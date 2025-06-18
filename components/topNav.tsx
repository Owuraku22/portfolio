"use client";

import { Icons } from "@/lib/icons";
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
    <nav className="container mx-auto flex justify-between p-8  text-xl">
      <div className="text-white font-bold text-[16px]">Safo</div>
      <div>
        <div className="space-x-8 hidden md:flex ">
          {navLinks.map(({ id, name, links }) => (
            <Link
              key={id}
              href={links}
              className="hover:underline text-[#ABB2BF]"
            >
              <span className="text-[#C778DD]">#</span> {name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Icons.Menu className="reverse" />
        </div>
      </div>
    </nav>
  );
}
