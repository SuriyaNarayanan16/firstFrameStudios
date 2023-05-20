import aboutUs from "../../images/aboutUs.svg";
import owner from "../../images/owner.jpeg";
import whyUs1 from "../../images/whyUs/professional.svg";
import whyUs2 from "../../images/whyUs/whyUs2.svg";
import whyUs3 from "../../images/whyUs/whyUs3.svg";
import bestTeam from "../../images/best_team.svg";
export const About = () => {
  return (
    <>
      <div>
        <div className="h-[333px] relative about_us flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <img src={aboutUs} />
            <p className="text-[16px] mt-[20px]">10+ Years of Experience</p>
          </div>
        </div>
        <div className="card_graident relative py-[150px] pt-[47px] px-[47px] flex items-center justify-center">
          <div className="absolute h-[220px] top-[47px] right-[0px] bg-[#333333] w-[70px]"></div>
          <div className="w-[40%] flex items-center justify-center relative">
            <img className="w-[504px] h-[482px]  z-[9]" src={owner} />
            <div className="absolute h-[220px] top-[100%] left-[0%] image_position bg-[#333333] w-[240px]"></div>
          </div>
          <div className="w-[50%]">
            <p className="text-[16px] leading-10 mb-[18px]">
              "First Frame Studios" - an outcome of the passion of a guy towards
              photography. He believes in the very words of Alfred Stieglitz,
              who says that in photography, there's a subtle reality, realer
              than reality itself. And hence, he found his way to reach his goal
              towards revealing reality through pictures. Every memorable moment
              of yours needs to be pictured, to be cherished for a life
              time.While you enjoy your moments, we consider it our
              responsibility to capture them for you.
            </p>
            <p className="font-semibold text-[18px] mb-[16px]">FOUNDER</p>
            <p className="font-[300] text-[18px]">ARAVIND KARTHIK R</p>
          </div>
        </div>
        <div className="bg-[#1F1F1F] flex flex-col jutify-center items-center py-[70px]">
          <p className="text-[44px] font-bold mb-[30px]">WHY CHOOSE US</p>
          <div className="flex items-center justify-between w-full px-[40px]">
            <div className="w-[32%] flex items-center flex-col">
              <img src={whyUs1} />
              <p className="text-[26px] font-medium mb-[12px]">
                Professional editing
              </p>
              <p className="text-[16px] text-center w-[310px]">
                Your creativity our inspiration. Whate ever your want
              </p>
            </div>
            <div className="w-[32%] flex items-center flex-col">
              <img src={whyUs2} />
              <p className="text-[26px] font-medium mb-[12px]">
                Long hour Shoots
              </p>
              <p className="text-[16px] text-center w-[310px]">
                Your creativity our inspiration. Whate ever your want
              </p>
            </div>
            <div className="w-[32%] flex items-center flex-col">
              <img src={whyUs3} />
              <p className="text-[26px] font-medium mb-[12px]">
                Extensive Equipments
              </p>
              <p className="text-[16px] text-center w-[310px]">
                Your creativity our inspiration. Whate ever your want
              </p>
            </div>
          </div>
        </div>
        <div className="card_graident relative py-[150px] pt-[47px] px-[47px] flex items-center justify-center">
          <div className="absolute h-[220px] top-[47px] left-[0px] bg-[#333333] w-[70px]"></div>
          <div className="w-[40%] mr-[40px]">
            <p className="font-bold text-[15px] mb-[20px]">Our Team</p>
            <img src={bestTeam} />
            <p className="text-[16px] mt-[20px] leading-10 mb-[18px]">
              "First Frame Studios" - an outcome of the passion of a guy towards
              photography. He believes in the very words of Alfred Stieglitz,
              who says that in photography, there's a subtle reality, realer
              than reality itself. And hence, he found his way to reach his goal
              towards revealing reality through pictures. Every memorable moment
              of yours needs to be pictured, to be cherished for a life
              time.While you enjoy your moments, we consider it our
              responsibility to capture them for you.
            </p>
          </div>
          <div className="w-[40%] flex items-center justify-center relative">
            <img className="w-[504px] h-[482px] z-[9]" src={owner} />
            <div className="absolute h-[220px] top-[100%]  translate-x-[45%] translate-y-[-50%] right-[0%] image_position bg-[#333333] w-[240px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
