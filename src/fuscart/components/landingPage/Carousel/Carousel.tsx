import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/Rough/1.png';
import './Carousel.css'; // Import custom styles

const Carousel1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // This function will handle the index change of the carousel and update the dot
  const handleChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        autoFocus={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={true}
        emulateTouch={true}
        className="custom-carousel"
        showIndicators={false} // Disable default indicators
        selectedItem={selectedIndex} // Set selected item based on state
        onChange={handleChange} // Listen to index change and update state
      >
        <div className="carousel-slide">
          <img src={image1} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={image1} alt="Slide 2" />
        </div>
        <div className="carousel-slide">
          <img src={image1} alt="Slide 3" />
        </div>
        <div className="carousel-slide">
          <img src={image1} alt="Slide 4" />
        </div>
      </Carousel>

      {/* Custom Dots below the carousel */}
      <div className="dot-manage">
        <div className="carousel-dots">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`dot ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => handleChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
