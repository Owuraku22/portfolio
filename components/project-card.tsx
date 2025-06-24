import Image from "next/image";

function ProjectCard() {
  return (
    <div className="border  border-textprimary max-w-[400px] ">
      <div className="min-h-70 w-full">
        <Image
          src={"/Rectangle 22.svg"}
          alt="project 1"
          height={100}
          width={100}
          className="object-cover w-full h-full"
        />{" "}
      </div>
      <div className="text-[16px] font-normal text-textprimary border-b  px-6 py-4">
        {" "}
        HTML CSS Python Flask
      </div>
      <div className="flex flex-col text-textprimary gap-6 px-6 py-4">
        <div className="text-white font-medium text-[24px] ">ChertNodes</div>
        <div className=" font-normal text-[16px] ">
          Minecraft servers hosting{" "}
        </div>
        <div className="border border-textsecondary py-2 px-9 text-white font-medium text-[16px] items-center w-fit">
          Live {`  <~~>`}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
