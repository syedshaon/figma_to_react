import React from "react";
import Navbar from "../pages/Navbar";

function OtherHeader({ parent, title }) {
  return (
    <div className="min-h-[150px] lg:min-h-[370px] bg-slate-50 overflow-hidden   relative">
      <div className="container absolute top-0 right-0">
        <div className="w-[829px] h-[829px] absolute z-10 top-[-450px] right-[-600px]  bg-slate-50   bg-gradient-to-bl from-emerald-100 to-slate-50  rounded-full"></div>
      </div>
      <div className="relative z-20 top-0 right-0  ">
        <Navbar />
        <div className="page-title container py-7  px-2 md:px-7 mt-5 lg:mt-28">
          <div className="text-gray-900 text-[40px] font-semibold  leading-[51px]">{title}</div>
          <nav>
            <a className="text-gray-900 text-base    leading-[25px]">
              {parent} <span className="mx-3"> &#62; </span>
            </a>

            <a className="text-green-500 text-base     leading-[25px]">{title}</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default OtherHeader;
