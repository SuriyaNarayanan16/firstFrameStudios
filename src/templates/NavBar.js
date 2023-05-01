import Logo from "../images/logo.svg";

export const NavBar = () => {
  return (
    <>
      <div className="fixed top-[0px] bg-[#05050599] z-50 w-full flex items-center justify-between px-[80px] py-[14px]">
        <div className="w-[50%]">
          <img src={Logo} />
        </div>
        <div className="w-[50%] flex items-center justify-between">
          <a href="/home" className="text-[16px] text-[#DEDEDE]">
            Home
          </a>
          <a href="/home" className="text-[16px] text-[#DEDEDE]">
            Gallery
          </a>
          <a href="/home" className="text-[16px] text-[#DEDEDE]">
            About Us
          </a>
          <a href="/home" className="text-[16px] text-[#DEDEDE]">
            Contact Us
          </a>
          <button className="border-0 px-[20px] py-[13px] font-medium text-[14px] text-[white] rounded-[4px] button_gradient">
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
};
