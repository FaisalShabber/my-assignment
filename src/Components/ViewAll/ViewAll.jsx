import React from "react";
import FeatureImages from "../FeatureImages/FeatureImages";
import F1 from "../../Assets/F1.svg";
import F2 from "../../Assets/F2.svg";
import F3 from "../../Assets/F3.svg";
import Tabs from "./Tabs";
function ViewAll() {
  return (
    <div className=" mx-[135px] mb-20">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="font-semibold text-[40px]">Best Real Estate Deals</h1>
          <p className="">
            Colonel gravity get thought fat smiling add but. Wonder twenty
            hunted and put income set desire expect.
          </p>
        </div>
        <button
          type="submit"
          className="text-white  bg-[#F85A47] font-medium rounded-md text-[17px] w-[200px] h-[65px]  "
        >
          View All Property
        </button>
      </div>
      <Tabs />
      <div className="flex justify-between items-center">
        <FeatureImages bgimg={F1} Featured="Featured" Dimension="3D" />
        <FeatureImages bgimg={F2} Featured="Featured" Dimension="3D" />
        <FeatureImages bgimg={F3} Featured="Featured" Dimension="3D"/>
      </div>
    </div>
  );
}

export default ViewAll;
