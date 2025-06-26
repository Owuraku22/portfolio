"use client";

import Link from "next/link";
import ProjectCard from "./project-card";

const dummyProjects = [
  {
    imageSrc:
      "https://res.cloudinary.com/dfdz4coc9/image/upload/v1750788534/Screenshot_from_2025-06-24_18-00-53_g2aqpm.png",
    imageAlt: "Portfolio",
    techStack: "Vue, TypeScript, TailwindCSS",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    liveLabel: "View Live",
    link: "https://owuraku.vercel.app/",
    gitHubLink: "https://github.com/Owuraku22/portfolio",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfdz4coc9/image/upload/v1745171991/dashboard.png",
    imageAlt: "ShaqApp Admin Dashboard",
    techStack: "Laravel, React, MySQL",
    title: "Admin Dashboard",
    description:
      "A modern admin dashboard offering advanced data visualization and user management tools.",
    link: "",
    liveLabel: "",
    gitHubLink: "",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfdz4coc9/image/upload/v1748008142/Screenshot_from_2025-05-23_13-47-08_ysmars.png",
    imageAlt: "ShaqDidi",
    techStack: "Laravel, React, MySQL",
    title: "Shaqdidi",
    description:
      "A web application that allows users to send requests and assign errands to personnel.",
    link: "https://shaqdidi-web.vercel.app/",
    liveLabel: "View Project",
    gitHubLink: "",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfdz4coc9/image/upload/v1745172016/shaqapp.png",
    imageAlt: "ShaqApp",
    techStack: "Angular, Express, PostgreSQL",
    title: "ShaqApp",
    description:
      "A robust e-commerce platform with product management, shopping cart, and secure payment processing.",
    link: "https://shaqapp.com/",
    liveLabel: "Visit Website",
    gitHubLink: "",
  },
  // {
  //   imageSrc: "/Rectangle 22.svg",
  //   imageAlt: "Screenshot of Project 5",
  //   techStack: "Svelte, Supabase",
  //   title: "Chat Application",
  //   description:
  //     "A real-time chat application with channels and private messaging.",
  //   link: "#",
  //   liveLabel: "Open App",
  //   gitHubLink: "#",
  // },
  // {
  //   imageSrc: "/Rectangle 22.svg",
  //   imageAlt: "Screenshot of Project 6",
  //   techStack: "React Native, Expo",
  //   title: "Fitness Tracker",
  //   description: "A mobile app to track workouts, nutrition, and progress.",
  //   link: "#",
  //   liveLabel: "Download",
  //   gitHubLink: "#",
  // },
];

function Projects({ set, limit }: { set: boolean; limit?: number }) {
  const displayedProjects = limit
    ? dummyProjects.slice(0, limit)
    : dummyProjects;
  return (
    <div className="container mx-auto md:px-8 mt-[3rem]">
      {set == true && (
        <div className="p-2 mb-6 mt-8 flex w-full items-center justify-center">
          <h1 className="text-[32px] font-medium text-white mr-4">
            <span className="text-textsecondary">#</span>projects
          </h1>
          <div className="border-b border-textsecondary w-full mr-8 md:mr-[10rem] lg:mr-[15rem]"></div>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/work";
            }}
            href={"/work"}
            className="text-white hover:text-textsecondary font-medium text-[16px] text-nowrap "
          >
            View all
          </Link>
        </div>
      )}
      <div className="grid mx-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
