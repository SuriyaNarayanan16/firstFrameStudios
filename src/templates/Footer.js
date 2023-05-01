import footerLogo from "../images/footer/footerLogo.svg";
import insta from "../images/footer/insta.svg";
import facebook from "../images/footer/facebook.svg";
import twitter from "../images/footer/twitter.svg";
export const Footer = () => {
  return (
    <>
      <div className="bg-[#1F1F1F] px-[80px] pt-[114px]">
        <div
          className="flex items-center justify-center pb-[50px]"
          data-aos="fade-right"
        >
          <img className="" src={footerLogo} />
        </div>
        <div className="border-t border-[#413C3C] py-[40px] flex items-center justify-between">
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
