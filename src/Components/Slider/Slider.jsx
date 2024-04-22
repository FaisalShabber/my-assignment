import React from "react";
import Buzz from "../../Assets/Buzz.svg";
import Chase from "../../Assets/Chase.svg";
import Microsoct from "../../Assets/Microsoct.svg";
import Gucc from "../../Assets/Gucc.svg";
import Airbnb from "../../Assets/Airbnb.svg";
import Uber from "../../Assets/Uber.svg";

function Slider() {
  return (
    <div className=" w-[50%] ml-[11rem] ">
      <h1 className="text-[17px] font-semibold mb-5 ">Our Amazing Partners</h1>
      <div className="flex justify-center gap-[3rem] ps-1 animate-pulse">
        <img src={Buzz} alt="" />
        <img src={Chase} alt="" />
        <img src={Microsoct} alt="" />
        <img src={Gucc} alt="" />
        <img src={Airbnb} alt="" />
        <img src={Uber} alt="" />
      </div>
    </div>
  );
}

export default Slider;
