import { Services } from "../../components/services";
import banner from "../../images/banner1.jpeg";
import cam from "../../images/camImage.svg";
import whyUs1 from "../../images/whyUs/professional.svg";
import whyUs2 from "../../images/whyUs/whyUs2.svg";
import whyUs3 from "../../images/whyUs/whyUs3.svg";
import collection1 from "../../images/collections/collection1.svg";
import collection2 from "../../images/collections/collection2.svg";
import collection3 from "../../images/collections/collection3.svg";
import collection4 from "../../images/collections/collection4.svg";
import collection5 from "../../images/collections/collection5.svg";
import star1 from "../../images/collections/star1.svg";
import star2 from "../../images/collections/star2.svg";
export const Dashboard = () => {
  return (
    <>
      <div className="">
        <div
          className="w-full h-full "
          data-aos="fade-right"
          data-aos-mirror="true"
        >
          {" "}
          <img className="object-cover w-full h-full" src={banner} />
          {/* banner */}
        </div>

        <div className="card_graident py-[120px]">
          {/* start of  card -1 */}
          <div className="flex justify-between items-start px-[98px]">
            <div className="w-[40%]"> </div>
            <div className="w-[50%]">
              <h2 className="text-[white] text-left font-bold text-[48px] mb-[19px]">
                About Us
              </h2>
              <p className="text-[#ffffffcc] text-[18px] text-left">
                "First Frame Studios" - an outcome of the passion of a guy
                towards photography. He believes in the very words of Alfred
                Stieglitz, who says that in photography, there's a subtle
                reality, realer than reality itself. And hence, he found his way
                to reach his goal towards revealing reality through pictures.
                Every memorable moment of yours needs to be pictured, to be
                cherished for a life time.While you enjoy your moments, we
                consider it our responsibility to capture them for you.
              </p>
            </div>
          </div>
          <div className="bg-[#1F1F1F] py-[50px] px-[90px] mt-[30px] flex justify-between items-center">
            <div
              className="w-[40%] relative"
              data-aos="fade-right"
              data-aos-mirror="true"
            >
              <img
                src={cam}
                className="absolute h-[440px] image_translate   bottom-[100%]"
              />
            </div>
            <div
              className="w-[50%] flex items-center justify-between"
              data-aos="fade-right"
              data-aos-mirror="true"
            >
              <div>
                <p className="font-bold text-[48px]">58+</p>
                <p className="text-[18px]">Cute Customer</p>
              </div>
              <div>
                <p className="font-bold text-[48px]">58+</p>
                <p className="text-[18px]">Cute Customer</p>
              </div>
              <div>
                <p className="font-bold text-[48px]">58+</p>
                <p className="text-[18px]">Cute Customer</p>
              </div>
            </div>
          </div>
          {/* end of  card -1 */}
          <div className="my-[120px] p-[28px] ">
            <div
              className="flex justify-center items-center flex-col"
              data-aos="fade-right"
            >
              <span className="font-bold text-[16px]  relative  mb-[10px] header_after">
                SERVICES
              </span>
              <p className="text-[50px] mb-[80px] ">What we do</p>
            </div>

            <div className="flex items-center justify-between flex-wrap">
              <Services />
            </div>
          </div>

          {/* choose us section */}
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
          {/* End of choose us section */}

          {/* latest collection */}
          <div className="relative flex justify-between items-start pt-[200px] py-[120px] px-[80px]">
            <div className="w-[50%]">
              {" "}
              <p className="text-[44px] font-semibold mb-[40px]">
                Latest Collection
              </p>
              <button className="border-0 px-[20px] py-[13px] font-medium text-[14px] text-[white] rounded-[4px] button_gradient">
                View Gallery
              </button>
            </div>
            <div className="w-[650px] relative pt-[160px] pr-[243px]">
              <img className="absolute left-[-70px] top-[61px]" src={star2} />
              <img
                className="absolute right-[-10px] top-[-185px]"
                src={star1}
              />
              <img
                className="absolute top-[-88px] left-[50%] translate-x-[-129%]"
                src={collection1}
              />
              <div>
                {" "}
                <img
                  data-aos="zoom-in"
                  className="absolute right-[0px] top-[-115px] h-[430px]"
                  src={collection2}
                />
                <img
                  data-aos="zoom-in"
                  className="z-50 relative"
                  src={collection4}
                />
              </div>

              <img
                data-aos="zoom-in"
                className="absolute left-[-290px] bottom-[0px]"
                src={collection3}
              />

              <img
                className="absolute w-[224px] h-[274px] right-[0px] bottom-[0px]"
                data-aos="zoom-in"
                src={collection5}
              />
            </div>
          </div>
          {/* End of latest collection */}
          <div className="">
            {" "}
            <div className="flex justify-center items-center flex-col">
              <span className="font-bold text-[16px]  relative  mb-[10px] header_after">
                TESTIMONIALS
              </span>
              <p className="text-[50px] mb-[80px] ">YOUR REVIEWS</p>
            </div>
            <div className="flex items-center px-[80px]  justify-between">
              <div className="relative w-[32%] flex items-center justify-center">
                <img className="w-full h-full object-cover" src={collection2} />
                <div className="layout_card absolute w-full h-full"></div>
                <div className="absolute bottom-[0px] bg-[white] text-[black] max-w-[344px] min-w-[280px] translate-x-[-50%] translate-y-[50%] py-[26px] px-[10px] left-[50%] flex items-center justify-center text-center text-[13px] font-medium">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </div>
              </div>
              <div className="relative w-[32%] flex items-center justify-center">
                <img className="w-full h-full object-cover" src={collection2} />
                <div className="layout_card absolute w-full h-full"></div>
                <div className="absolute bottom-[0px] bg-[white] text-[black] max-w-[344px] min-w-[280px] translate-x-[-50%] translate-y-[50%] py-[26px] px-[10px] left-[50%] flex items-center justify-center text-center text-[13px] font-medium">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </div>
              </div>
              <div className="relative w-[32%] flex items-center justify-center">
                <img className="w-full h-full object-cover" src={collection2} />
                <div className="layout_card absolute w-full h-full"></div>
                <div className="absolute bottom-[0px] bg-[white] text-[black] max-w-[344px] min-w-[280px] translate-x-[-50%] translate-y-[50%] py-[26px] px-[10px] left-[50%] flex items-center justify-center text-center text-[13px] font-medium">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </div>
              </div>
            </div>
            {/* youtube video section */}
            <div>
              <div className="px-[80px] mt-[120px] ">
                <div className="flex justify-center items-center flex-col">
                  <span className="font-bold text-[16px]  relative  mb-[10px] header_after">
                    VIDEOS
                  </span>
                  <p className="text-[50px] mb-[80px] ">YOUR MOMENTS</p>
                </div>{" "}
                <iframe
                  width="100%"
                  height="591px"
                  src="https://www.youtube.com/embed/fRD_3vJagxk?autoplay=1&loop=5"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loop={5}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
