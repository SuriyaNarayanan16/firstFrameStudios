import contactUs from "../../images/contactUs.jpeg";
import storeImage from "../../images/storeImage.jpeg";
import storeWall from "../../images/storeWall.jpeg";
import whyUs1 from "../../images/whyUs/professional.svg";
import whyUs2 from "../../images/whyUs/whyUs2.svg";
import whyUs3 from "../../images/whyUs/whyUs3.svg";
import bestTeam from "../../images/best_team.svg";
export const Contact = () => {
  return (
    <>
      <div>
        <div className="h-[333px] relative about_us flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <img src={contactUs} />
          </div>
        </div>
        <div className="card_graident py-[100px]">
          <div className="pl-[78px] ">
            <p className="pl-[20px] mb-[65px]  header_gradient text-[24px] font-bold">
              FILL IN THE FORM
            </p>
          </div>
          <div className="flex  justify-center">
            <div className="w-[40%] flex  justify-center relative mr-[40px]">
              <img className="w-full h-[560px] z-[9]" src={storeImage} />
              <div className="absolute h-[420px] top-[0%] common_translate  left-[0%]  bg-[#333333] w-[407px]"></div>
            </div>
            <div className="flex w-[40%] mr-[80px]  flex-col justify-start">
              <div className="mb-[30px] w-full">
                <p className="text-[16px] mb-[18px]">Name</p>
                <input className="outline-none px-[15px] py-[10px] text-[14px] w-full rounded-[6px] border border-[#616161] bg-[#2E2D2D] text-[white] " />
              </div>
              <div className="mb-[30px] w-full">
                <p className="text-[16px] mb-[18px]">Email</p>
                <input className="outline-none px-[15px] py-[10px] text-[14px] w-full rounded-[6px] border border-[#616161] bg-[#2E2D2D] text-[white] " />
              </div>
              <div className="mb-[30px] w-full">
                <p className="text-[16px] mb-[18px]">Phone Number</p>
                <input className="outline-none px-[15px] py-[10px] text-[14px] w-full rounded-[6px] border border-[#616161] bg-[#2E2D2D] text-[white] " />
              </div>
              <div className="mb-[30px] w-full">
                <p className="text-[16px] mb-[18px]">What’s the Event?</p>
                <input className="outline-none px-[15px] py-[10px] text-[14px] w-full rounded-[6px] border border-[#616161] bg-[#2E2D2D] text-[white] " />
              </div>
              <div className="mb-[44px] w-full">
                <p className="text-[16px] mb-[18px]">
                  How did you hear about us?
                </p>
                <input className="outline-none px-[15px] py-[10px] text-[14px] w-full rounded-[6px] border border-[#616161] bg-[#2E2D2D] text-[white] " />
              </div>
              <div>
                <button className="button_gradient font-medium text-[16px] py-[17px] px-[28px] rounded-[4px]">
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-[120px] pl-[80px] mb-[170px]">
            <div className="w-[40%] ">
              <div className="mb-[40px]">
                <p className="font-semibold text-[18px] mb-[16px]">Address</p>
                <p className="text-[20px] text-[#ACACAC]">
                  17A, 15, Kalli Kuppam Rd, Venkatapuram, Ambattur, Chennai,
                  Tamil Nadu 600053
                </p>
              </div>
              <div className="mb-[40px]">
                <p className="font-semibold text-[18px] mb-[16px]">
                  Phone Number
                </p>
                <p className="text-[20px] text-[#ACACAC]">75501 51177</p>
              </div>
              <div className="mb-[40px]">
                <p className="font-semibold text-[18px] mb-[16px]">Email</p>
                <p className="text-[20px] text-[#ACACAC]">
                  Firstframe2017@gmail.com
                </p>
              </div>
              <div className="mb-[40px]">
                <p className="font-semibold text-[18px] mb-[16px]">
                  Office Timings
                </p>
                <p className="text-[20px] text-[#ACACAC]">All days </p>
              </div>
            </div>
            <div className="w-[50%] h-[500px]">
              <iframe
                class="w-full h-full pr-[170px]"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=first frame studio ambattur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
