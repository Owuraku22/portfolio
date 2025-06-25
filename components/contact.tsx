import { Icons } from "@/lib/icons";

function Contact({ set }: { set: boolean }) {
  return (
    <div className="container mx-auto md:px-8 my-[3rem]">
      {set == true && (
        <div className="p-2  flex w-full items-center">
          <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
            <span className="text-textsecondary ">#</span>contacts
          </h1>
          <div className="border-b border-textsecondary w-[22rem]"></div>
        </div>
      )}
      <div className="flex justify-between items-center px-2">
        <div className="flex-1 text-[16px] font-normal text-textprimary">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="flex-1  flex items-end justify-end  w-full md:pr-18">
          <div className="flex flex-col w-fit h-fit border border-textsecondary gap-4  p-6">
            <span className="text-white font-normal text-[15px] md:text-[16px]">
              Message me here
            </span>
            <a  href="" className="text-textprimary font-normal text-[14px] md:text-[16px] flex gap-2">
              <Icons.Instagram />
              Message me on Instagram
            </a>
            <a  href="mailto:owurakwaku758@gmail.com" className="text-textprimary font-normal text-[14px] md:text-[16px] flex gap-2">
              <Icons.Mail />
              Send me Mail
            </a>
            <a href= "https://api.whatsapp.com/send?phone=233500081395" className="text-textprimary font-normal text-[14px] md:text-[16px] flex gap-2">
              <Icons.WhatsApp />
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
