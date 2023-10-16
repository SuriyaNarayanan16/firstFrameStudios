import footerLogo from "../images/footer/footerLogo.svg";
import insta from "../images/footer/insta.svg";
import facebook from "../images/footer/facebook.svg";
import twitter from "../images/footer/twitter.svg";
import address from "../images/footerContent/address.svg";
import email from "../images/footerContent/email.svg";
import call from "../images/footerContent/call.svg";
import colorLogo from "../images/footerContent/colorLogo.svg";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#1F1F1F] px-[80px] pt-[114px]">
        <div
          className="flex items-start justify-between pb-[50px]"
          data-aos="fade-right"
        >
          <div className="w-[20%]">
            <p className="font-semibold text-[22px] mb-[25px]"> About Us</p>
            <p className="text-[16px] text-[#ACACAC]">
              First Frame Studios is one of the Best wedding photographers in
              Chennai. We Capture and frame your special moments to cherish a
              lifetime.{" "}
            </p>
          </div>
          <div className="w-[23%] ml-[80px]">
            <p className="font-semibold text-[22px] mb-[25px]"> Our Services</p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Enagagement Photos
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Wedding Couple Potraits
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Candid Photography
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Maternity photography
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Kids / Doodle photography
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Pre Wedding Photoshoots
            </p>
          </div>
          <div className="w-[23%] ml-[80px]">
            <p className="font-semibold text-[22px] mb-[25px]"> Quick Links</p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Home
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Gallery
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              About Us
            </p>
            <p className="text-[16px] text-[#ACACAC] mb-[20px] cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="w-[33%]">
            <p className="font-semibold text-[22px] mb-[25px]"> Contact Us</p>
            <div className="flex items-start mb-4">
              <img src={address} className="mr-[10px]" />
              <p className="text-[16px] text-[#ACACAC]">
                17A, 15, Kalli Kuppam Rd, Venkatapuram, Ambattur, Chennai, Tamil
                Nadu 600053
              </p>
            </div>
            <div className="flex items-start mb-4">
              <img src={email} className="mr-[10px]" />
              <p className="text-[16px] text-[#ACACAC]">
                firstframestuidos2017@gmail.com
              </p>
            </div>
            <div className="flex items-start mb-4">
              <img src={call} className="mr-[10px]" />
              <p className="text-[16px] text-[#ACACAC]">75501 51177</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#413C3C] py-[20px] flex items-center justify-between">
          <div>
            <img src={colorLogo} />
          </div>
          <p className="text-[20px] text-[#4E4D4D] ">©Firstframestudios2023.</p>
          <div className="flex items-center justify-space">
            <img className="mr-[20px]" src={facebook} />
            <img className="mr-[20px]" src={insta} />
            <img className="" src={twitter} />
          </div>
        </div>
      </div>
    </>
  );
};
