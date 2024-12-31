import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../Assets/Rough/1.png";
import "./Carousel.css"; // Import custom styles

const Carousel1 = () => {

  const slides = [
    <div className="carousel-slide" key="slide-1">
      <img src={image1} alt="Slide 1"  className="carousal-image"/>
    </div>,
    <div className="carousel-slide" key="slide-2">
      <img src={image1} alt="Slide 2"  className="carousal-image"/>
    </div>,
    <div className="carousel-slide" key="slide-3">
      <img src={image1} alt="Slide 3" className="carousal-image"/>
    </div>,
    <div className="carousel-slide" key="slide-4">
      <img src={image1} alt="Slide 4" className="carousal-image" />
    </div>,
  ];

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        emulateTouch={true}
        className="custom-carousel"
        showIndicators={false}
      >
        {slides}
      </Carousel>

      {/* Custom Dots */}
     
    </div>
  );
};

export default Carousel1;
