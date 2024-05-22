import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ElectronicsCarousel.css";

const electronicsData = [
  {
    id: 1,
    imageUrl: "https://themesfamily.com/tm/baki/assets/img/watch/slide2.png",
    title: "iPhone",
  },
  {
    id: 2,
    imageUrl: "https://www.pngall.com/wp-content/uploads/13/iPhone-14-PNG.png",
    title: "Boat Earbuds",
  },
  {
    id: 3,
    imageUrl:
      "https://www.boat-lifestyle.com/cdn/shop/products/product-Image.png?v=1625813323",
    title: "Noise Watch",
  },
];

const ElectronicsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % electronicsData.length);
    }, 2000); // Change interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [electronicsData.length]);

  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Enable infinite looping
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (matches effect interval)
    speed: 500, // Transition speed
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll by one slide at a time
    arrows: false, // Hide navigation arrows (optional)
    responsive: [
      // Responsive settings for different screen sizes
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="electronics-carousel-container">
      <Slider {...settings}>
        {electronicsData.map((item) => (
          <div key={item.id} className="electronics-carousel-item">
            <img src={item.imageUrl} alt={item.title} />
            {/* <h3>{item.title}</h3> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ElectronicsCarousel;
