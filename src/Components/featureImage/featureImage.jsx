import React from "react";
import bgtop from "./Assets/bgtop.svg";

function featureImage() {
  return (
    <div>
      <div
        className="w-[370px] h-[370px]"
        style={{
          backgroundImage: `url(${bgtop})`,
          // backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex">
          <span className="border-2 p-2 rounded-md bg-black/10">Featured</span>
          <span className="border-2 p-2 rounded-md bg-black/10">3D</span>
        </div>
      </div>
    </div>
  );
}

export default featureImage;
