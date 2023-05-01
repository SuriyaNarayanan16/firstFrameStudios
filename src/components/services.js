import service1 from "../images/servicesImage/service1.svg";
import service2 from "../images/servicesImage/service2.svg";
import service3 from "../images/servicesImage/service3.svg";
import service4 from "../images/servicesImage/service4.svg";
import service5 from "../images/servicesImage/service5.svg";
import service6 from "../images/servicesImage/service6.svg";
export const Services = () => {
  const serviceList = [
    {
      image: service1,
      content: "ENGAGEMENT",
    },
    {
      image: service2,
      content: "WEDDING PHOTO",
    },
    {
      image: service3,
      content: "BIRTHDAY",
    },
    {
      image: service4,
      content: "MATERNITY",
    },
    {
      image: service5,
      content: "OUTDOOR SHOOT",
    },
    {
      image: service6,
      content: "MODEL PHOTSHOOT",
    },
  ];
  return (
    <>
      {serviceList.map((item, i) => (
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          data-aos-mirror="true"
          key={i}
          className="w-[32%] relative mb-[30px] cursor-pointer ease-in-out duration-300 hover:scale-90  h-[449px]"
        >
          <img className="object-cover h-full w-full" src={item.image} />
          <div className="absolute bg-[#151515b3] w-full py-[13px] text-[24px] text-center bottom-[0px]">
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
};
