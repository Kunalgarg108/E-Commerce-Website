// Import Swiper core and required modules
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Card Component
function CardHome({ backGroundImage, image, description }) {
  return (
    <div
    className="w-full h-[400px] rounded-lg shadow-md overflow-hidden border bg-white"
    style={{ backgroundImage: `url(${backGroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="flex flex-col sm:flex-row-reverse bg-white bg-opacity-90 h-full">
      {/* Right Section: Content */}
      <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center h-full order-2 sm:order-1">
        <p className="text-gray-800 text-lg font-semibold text-center">
          {description}
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      {/* Left Section: Image */}
      <div className="relative w-full sm:w-1/2 h-full order-1 sm:order-2 sm-[250px] sm-overflow-hidden" >
        <img
          src={image}
          alt="Card Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
  
  );
}

// Main Swiper Slider Component
const Cards = () => {
  const cardData = [
    {
      backGroundImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      description: "This is the first card description.",
    },
    {
      backGroundImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      description: "This is the second card description.",
    },
    {
      backGroundImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      description: "This is the third card description.",
    },
    {
      backGroundImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
      description: "This is the fourth card description.",
    },
  ];

  return (
    <Swiper
      // Swiper configuration
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* Render Swiper Slides */}
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <CardHome
            backGroundImage={card.backGroundImage}
            description={card.description}
            image={card.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cards;
