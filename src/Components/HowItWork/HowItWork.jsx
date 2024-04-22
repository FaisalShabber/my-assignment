import React from "react";
import search from "../../Assets/Searchicon.svg";
import handicon from "../../Assets/handicon.svg";
import buildingicon from "../../Assets/buildingicon.svg";
import line1 from "../../Assets/1stline.svg";
import HIWComp from "./HIWComp";

function HowItWork() {
  return (
    <div className="mx-[170px] my-[230px] flex flex-col  items-center">
      <h1 className="text-black font-semibold text-[40px] mb-[70px]">
        How it works ?
      </h1>

      <div className="flex justify-between items-center ">
        <HIWComp
          color={"#9672FF"}
          img={search}
          Heading="Research Suburbs"
          Desc="Wonder twenty hunted and put income set desire expect. Am cottage calling."
        />
        <img className="-mt-32" src={line1} alt="" />
        <HIWComp
          color={"#4DDFFD"}
          img={handicon}
          Heading="Instant Valuation"
          Desc="Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight."
        />
        <img className="-mt-32 transform scale-x-[-1]" src={line1} alt="" />

        <HIWComp
          color={"#F2B8EC"}
          img={buildingicon}
          Heading="Track Property"
          Desc="Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible."
        />
      </div>
    </div>
  );
}

export default HowItWork;
