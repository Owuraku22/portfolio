function Contact() {
  return (
    <div className="container mx-auto md:px-8 my-[3rem]">
      <div className="p-2  flex w-full items-center">
        <h1 className="text-[32px] font-medium text-white text-nowrap mr-4">
          <span className="text-textsecondary ">#</span>contacts
        </h1>
        <div className="border-b border-textsecondary w-[22rem]"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1 text-[16px] font-normal text-textprimary">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="flex-1  flex items-end justify-end  w-full pr-18">
          <div className="flex flex-col w-fit h-fit border border-textsecondary  p-6">
            <span className="text-white font-medium">Message me here</span>
            <span className="text-textprimary font-medium">
              Message me here
            </span>
            <span className="text-textprimary font-medium">
              Message me here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
