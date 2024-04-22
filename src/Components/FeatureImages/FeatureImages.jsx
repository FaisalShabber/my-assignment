import React from "react";


function FeatureImages({bgimg, Featured,Dimension }) {
  return (
    <div>
      <div
        className="w-[370px] h-[300px] rounded-md border"
        style={{
          backgroundImage: `url(${bgimg})`,
          // backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex gap-3 pl-5 pt-5 text-white">
          <span className="border-2 p-2 rounded-md bg-black/40">{Featured}</span>
          <span className="border-2 p-2 rounded-md bg-black/40">{Dimension}</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureImages;
