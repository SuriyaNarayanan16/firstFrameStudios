import gallery from "../../images/gallery.svg";

export const Gallery = () => {
  return (
    <>
      <div className="h-[333px] relative about_us flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          {" "}
          <img src={gallery} />
        </div>
      </div>
      <div className="card_graident py-[120px]">
        <div
          className="flex justify-center items-center flex-col"
          data-aos="fade-right"
        >
          <span className="font-bold text-[16px]  relative  mb-[10px] header_after">
            ALL PHOTOS
          </span>
        </div>
        <div className="p-[20px]">
          <div className="flex items-center">
            <div className="">Wedding Photos</div>
          </div>
        </div>
      </div>
    </>
  );
};
