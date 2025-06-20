import Image from "next/image";

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
        <Projects />
      </main>
    </div>
  );
}
function Profile() {
  return (
    <div className="container px-10 md:px-18 mx-auto flex flex-col md:flex-row gap-4 mt-[3rem] md:mt-[10rem] h-auto ">
      <div className="flex-1 flex flex-col gap-4 h-auto">
        <div className="font-semibold text-[32px] text-white">
          Safo is a <span className="text-[#C778DD]">backend developer</span>
        </div>
        <p className="font-normal text-[16px] text-[#ABB2BF] mt-4">
          He crafts responsive websites where technologies meet creativity
        </p>
        <div className="border text-white border-[#C778DD] py-2 px-4 w-fit">
          Contact me !!
        </div>
      </div>
      <div className="flex-1 relative w-full  min-h-[280px] sm:min-h-[300px] lg:min-h-[300px]">
        <Image
          src={"/profile.svg"}
          alt="profile"
          height={100}
          width={100}
          className="absolute w-100 h-100  md:w-100 md:h-100 -bottom-10 sm:-bottom-15 xl:-bottom-5 z-10 object-contain "
        />
        <Image
          src={"/squares.png"}
          alt="profile"
          height={100}
          width={100}
          className="absolute top-10 w-30 h-30 object-contain"
        />
        <div className="absolute bottom-0 flex items-center gap-2 bg-[#282C33] px-4 z-20 border w-[330px] sm:w-[380px] md:w-[300px] xl:w-[380px]">
          <div className="h-3 w-3 bg-[#C778DD]"></div>
          <p className="text-[16px] font-medium text-textprimary">
            Currently working on{" "}
            <span className="text-white  font-semibold">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container mx-auto md:px-8 mt-[3rem]">
      <div className="p-2  flex w-full items-center justify-center">
        <h1 className="text-[32px] font-medium text-white mr-4">
          <span className="text-textsecondary">#</span>Projects
        </h1>
        <div className="border-b border-textsecondary w-full mr-8 md:mr-[10rem] lg:mr-[15rem]"></div>
        <div className="text-white font-medium text-[16px] text-nowrap ">
          View all
        </div>
      </div>
    </div>
  );
}
