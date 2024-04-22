import React from "react";

function HIWComp({ img, Heading, Desc, color }) {
  return (
    <div className=" flex flex-col justify-start items-center gap-3">
      <div
        className="w-[90px] h-[90px] rounded-[20px] flex justify-center items-center"
        style={{ backgroundColor:  color  }}
      >
        <img src={img} alt="" className="" />
      </div>
      <h1 className="font-semibold w-[192px] text-[22px]">{Heading}</h1>
      <h1 className="font-normal w-[260px] text-[16px] text-center">{Desc}</h1>
    </div>
  );
}

export default HIWComp;
