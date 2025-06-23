import ProjectCard from "./project-card";

function Projects() {
  return (
    <div className="container mx-auto md:px-8 mt-[3rem]">
      <div className="p-2  flex w-full items-center justify-center">
        <h1 className="text-[32px] font-medium text-white mr-4">
          <span className="text-textsecondary">#</span>projects
        </h1>
        <div className="border-b border-textsecondary w-full mr-8 md:mr-[10rem] lg:mr-[15rem]"></div>
        <div className="text-white font-medium text-[16px] text-nowrap ">
          View all
        </div>
      </div>
      <div className="grid mx-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6).keys()].map((index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
