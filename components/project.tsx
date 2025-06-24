"use client";

import Link from "next/link";
import ProjectCard from "./project-card";

const dummyProjects = [
  {
    imageSrc: "/Rectangle 22.svg",
    imageAlt: "Screenshot of Project 1",
    techStack: "React, TypeScript, TailwindCSS",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    liveLabel: "View Live",
    link: "#",
  },
  {
    imageSrc: "/full.svg",
    imageAlt: "Screenshot of Project 2",
    techStack: "Next.js, Node.js, MongoDB",
    title: "Blog Platform",
    description:
      "A full-stack blog platform with authentication and markdown support.",
    link: "#",
    liveLabel: "Visit Site",
  },
  {
    imageSrc: "/profile2.png",
    imageAlt: "Screenshot of Project 3",
    techStack: "Vue, Firebase",
    title: "Task Manager",
    description:
      "A simple task management app with real-time sync and notifications.",
    link: "#",
    liveLabel: "Try Now",
  },
  {
    imageSrc: "/Rectangle 22.svg",
    imageAlt: "Screenshot of Project 4",
    techStack: "Angular, Express, PostgreSQL",
    title: "E-commerce Dashboard",
    description: "An admin dashboard for managing products, orders, and users.",
    link: "#",
    liveLabel: "See Demo",
  },
  {
    imageSrc: "/Rectangle 22.svg",
    imageAlt: "Screenshot of Project 5",
    techStack: "Svelte, Supabase",
    title: "Chat Application",
    description:
      "A real-time chat application with channels and private messaging.",
    link: "#",
    liveLabel: "Open App",
  },
  {
    imageSrc: "/Rectangle 22.svg",
    imageAlt: "Screenshot of Project 6",
    techStack: "React Native, Expo",
    title: "Fitness Tracker",
    description: "A mobile app to track workouts, nutrition, and progress.",
    link: "#",
    liveLabel: "Download",
  },
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
