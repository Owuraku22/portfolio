import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Profile from "@/components/profile";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Profile />
        <div className="mx-auto max-w-[550px] flex flex-col justify-end items-end mt-[7rem]">
          <div className=" text-white font-medium text-[18px]  md:text-[24px] border border-textprimary p-6">
            With great power comes great electricity bill
          </div>
          <div className=" text-white font-medium text-[14px] md:text-[20px] border border-textprimary p-4">
            - Dev Safo
          </div>
        </div>
        <Projects set={true} limit={3} />
        <Skills set={true} />
        <AboutMe set={true} />
        <Contact set={true} />
      </main>
    </div>
  );
}
