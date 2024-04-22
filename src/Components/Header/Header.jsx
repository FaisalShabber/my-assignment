import React, { useState } from "react";
import facebook from "../../Assets/facebook.svg";
import insta from "../../Assets/insta.svg";
import linkden from "../../Assets/linkden.svg";
import twitter from "../../Assets/twitter.svg";
import HeaderImage from "../../Assets/HeaderImage.svg";
import HeaderImage2 from "../../Assets/HeaderImage2.svg";
import { Link } from "react-router-dom";
import Searchbar from "../SearchBar/Searchbar";
import Slider from "../Slider/Slider";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Header() {
  const slider = [HeaderImage, HeaderImage2];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  return (
    <div className="pt-16">
      <div className="flex mt-[50px] ml-[135px] mr-[36px] ">
        {/* Left */}
        <div className="w-[48%] flex-col justify-center items-center">
          <div className="mt-10 p-10  flex flex-col gap-3">
            <div className="">
              <h1 className="text-[#FF9900] font-bold text-[22px]">
                RESIDENTIAL & OFFICE SPACES
              </h1>
              <h1 className="w-[484px]  text-[54px]">
                Smart Living Style for Smart People
              </h1>
              <p className=" w-[499px] font-normal text-[17px]">
                Much did had call new drew that kept. Limits expect wonder law
                she. Now has you views woman noisy match money rooms.
              </p>
            </div>
          </div>
          <div className="pl-10  z-10 ">
            <Searchbar />
          </div>
          {/* <Slider/> */}
        </div>
        {/* right */}
        <div className=" w-full flex justify-center items-center">
          <div className="">
            {/* Display the current slide */}

            <img
              className="w-[603px] h-[573px] object-cover"
              src={slider[currentSlide]}
              alt="headerimage"
            />

            {/* Navigation controls */}
            <div className="flex justify-end mr-1 gap-5 mt-2">
              <SlArrowLeft
                className="cursor-pointer text-white hover:text-black"
                onClick={handlePreviousSlide}
              />
              <SlArrowRight
                className="cursor-pointer text-white hover:text-black"
                onClick={handleNextSlide}
              />
            </div>
          </div>
        </div>

        <div className="w-[5%] ml-[78px] flex-col flex gap-10 justify-center items-center ">
          <Link to="/facebook ">
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link to="/insta">
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={insta}
              alt="insta"
            />
          </Link>
          <Link to="/LinkdIn">
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={linkden}
              alt="Linkednin"
            />
          </Link>
          <Link to="/twitter">
            {" "}
            <img
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              src={twitter}
              alt="twitter"
            />
          </Link>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Header;
