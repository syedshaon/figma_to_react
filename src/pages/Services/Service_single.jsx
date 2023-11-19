import React from "react";

function Service_single({ title, desc, img1, img2, img3, img4 }) {
  return (
    <div className=" max-w-[704px] text-center lg:text-left   rounded-[20px] shadow-md">
      <h3 className="text-black p-5 pb-0  text-[26px] font-semibold  uppercase">{title}</h3>
      <p className=" p-5 text-neutral-400 text-base font-normal  capitalize">{desc}</p>
      <div className="img-container ">
        <div className="flex">
          <img src={img1} className="w-9/12  " alt="" />
          <img src={img2} className="w-3/12   " alt="" />
        </div>

        <div className="flex">
          <img src={img3} className="w-6/12   " alt="" />
          <img src={img4} className="w-6/12 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Service_single;
