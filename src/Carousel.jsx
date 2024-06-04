import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="https://source.unsplash.com/random" alt="Carousel Item 1" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random" alt="Carousel Item 1" />
        </div>
        <div>
          <img src="https://source.unsplash.com/random" alt="Carousel Item 2" />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
