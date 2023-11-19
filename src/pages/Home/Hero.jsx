import React from "react";
import Button from "../../contents/Button";
import header1 from "../../assets/home_images/header1.webp";
import header2 from "../../assets/home_images/header2.webp";
import header3 from "../../assets/home_images/header3.webp";
import header4 from "../../assets/home_images/header4.webp";

function Hero() {
  return (
    <div className="   container  px-2 md:px-7    min-h-[637px]  justify-center  md:justify-between items-center flex flex-col  md:flex-row ">
      <div className="pb-10 md:pb-0 text-center md:text-left  left md:w-1/2 md:pr-10 order-2 md:order-1">
        <div className="  flex-col gap-2.5">
          <h2 className="text-black text-5xl font-bold ">Increase Your Customers Loyalty and Satisfaction</h2>
          <p className="my-10 text-black text-xl font-medium ">We help businesses like yours earn more customers, standout from competitors, make more money</p>
        </div>

        <Button text={"Get Started"} color={"green"} />
      </div>

      <div className="flex pb-10 md:py-0  gap-8 flex-col  order-1 md:order-2">
        <div className="flex  justify-between top">
          <img className="rounded w-[73%] " src={header1} alt="header1" />
          <img className="rounded  w-[23%]" src={header2} alt="header2" />
        </div>
        <div className="flex  justify-between top">
          <img className="rounded w-[48%]" src={header3} alt="header3" />
          <img className="rounded w-[48%]" src={header4} alt="header4" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
