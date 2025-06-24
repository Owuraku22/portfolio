import Image from "next/image";
type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  techStack: string;
  title: string;
  description: string;
  liveLabel: string;
  link: string;
};
type Data = {
  data: ProjectCardProps;
};

function ProjectCard({ data }: Data) {
  return (
    <div className="border border-textprimary max-w-[400px]">
      <div className="relative h-[280px] w-full ">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          className="object-cover "
        />
      </div>
      <div className="text-[16px] font-normal text-textprimary border-b px-6 py-4">
        {data.techStack}
      </div>
      <div className="flex flex-col text-textprimary gap-6 px-6 py-4">
        <div className="text-white font-medium text-[24px]">{data.title}</div>
        <div className="font-normal text-[16px]">{data.description}</div>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-textsecondary py-2 px-9 text-white font-medium text-[16px] items-center w-fit"
        >
          {data.liveLabel} {`  <~~>`}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
