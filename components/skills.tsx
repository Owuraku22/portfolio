import Image from "next/image";

function Skills({ set }: { set: boolean }) {

 

  const SkillsCard = ({Stack, description}:{Stack:string, description:string}) => {
    return (
      <div className="border border-textprimary h-fit max-w-[180px] md:w-auto">
        <div className="border-b border-textprimary p-2 text-white font-semibold">
          {Stack}
        </div>
        <p className="text-textprimary p-2 max-w-40 md:max-w-50 text-wrap leading-10">
       {description}
        </p>
      </div>
    );
  };

  return (
    <div className="container mx-auto md:px-8 my-[3rem]">
      <div className="p-2 mt-12 mb-6 flex w-full items-center ">
        <h1 className="text-[32px] font-medium text-white mr-4">
          <span className="text-textsecondary">#</span>skills
        </h1>
        {set && (
          <div className="border-b border-textsecondary w-full mr-8 md:mr-[10rem] lg:mr-[18rem]"></div>
        )}
      </div>
      <div className="flex flex-3  md:flex-row flex-col-reverse gap-8  h-auto w-full m-3">
        <div className="hidden md:flex flex-1 ">
          <div className="flex flex-col gap-[5rem] flex-1">
            <div className="grid grid-cols-5 gap-2  place-items-center  w-fit mt-8 ml-8 h-fit">
              {[...Array(25).keys()].map((index) => (
                <div
                  key={index}
                  className="h-1 w-1 bg-[#ABB2BF] rounded-full"
                ></div>
              ))}
            </div>
            <Image
              src={"/squares.png"}
              alt="profile"
              height={100}
              width={100}
              className="w-50 h-30 object-contain ml-8"
            />
          </div>

          <div className="flex flex-1 justify-center items-center">
            <div className="grid grid-cols-5 gap-2  place-items-center h-fit w-fit md:ml-[3rem]">
              {[...Array(25).keys()].map((index) => (
                <div
                  key={index}
                  className="h-1 w-1 bg-[#ABB2BF] rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            {" "}
            <div className="border border-textprimary h-20 w-20 mt-[2rem]"></div>
            <div className="border border-textprimary h-12 w-12 mt-[6rem] ml-[4rem]"></div>
          </div>
        </div>
        <div className="flex flex-2 md:ml-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillsCard Stack="Languages" description="PHP, Python, Dart, Javascript"/>
            <SkillsCard Stack="Frameworks" description="React, Laravel, Vue, Flutter, Adonis"/>
            <SkillsCard Stack="Databases" description="MySQL, MongoDB, PostgreSQL"/>
            <SkillsCard Stack="Others" description="Html, Css, JavaScript, VB.net"/>
            <div className="col-start-2">
              <SkillsCard Stack="Tools" description="Git, Github"/>
            </div>
            <div className="col-start-2 md:col-start-3">
              <SkillsCard Stack="Cloud" description="Hostinger, Laravel cloud, Google Cloud"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
