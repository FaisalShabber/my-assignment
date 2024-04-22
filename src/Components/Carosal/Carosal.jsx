import React, { useState } from "react";
import HeaderImage from "../../Assets/HeaderImage.svg";
import bgtop from "../../Assets/bgtop.svg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel() {
  // Array of images
  const slider = [HeaderImage, bgtop]; // You might have more images here

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  // Function to handle the previous slide
  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  return (
    <div className="w-full">
      {/* Display the current slide */}
      <div className="w-full">
        <img
          className="w-[603px] h-[573px] object-cover"
          src={slider[currentSlide]}
          alt="headerimage"
        />
      </div>

      {/* Navigation controls */}
      <div className="flex justify-end mr-1 gap-5 mt-2">
        <SlArrowLeft
          className="cursor-pointer hover:text-black"
          onClick={handlePreviousSlide}
        />
        <SlArrowRight
          className="cursor-pointer hover:text-black"
          onClick={handleNextSlide}
        />
      </div>
    </div>
  );
}

export default Carousel;
