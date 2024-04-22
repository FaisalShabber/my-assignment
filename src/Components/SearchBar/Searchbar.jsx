import React from "react";
import homeS from "../../Assets/homeS.png";

function Searchbar() {
  return (
    <form className="">
      <label
        for="default-search"
        className=" text-sm font-medium  sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative ">
        <span className="absolute inset-y-0 start-3 flex items-center ps-3 pointer-events-none">
          <img src={homeS} alt="" className=" w-7" />
        </span>
        <input
          type="search"
          id="default-search"
          className="block  w-[790px] h-[86px] ps-20 text-lg text-gray-900 border border-gray-300 rounded-sm
           "
          placeholder="Enter Zipcode to search properties"
          required
        />
        <button
          type="submit"
          className="text-white  absolute -end-[11.9rem] bottom-0   bg-[#F85A47] font-medium rounded-sm text-[17px] w-[190px] h-[86px]  "
        >
          Search Now!
        </button>
      </div>
      
     
    </form>
  );
}

export default Searchbar;
