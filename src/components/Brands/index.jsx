import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [
    'brand1.png',
    'brand2.png',
    'brand3.png',
    'brand4.png',
    'brand5.png',
  ];

  return (
    <div className="tw-h-32 tw-bg-[#112545] tw-flex tw-items-center">
      <div className="container tw-mx-auto">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className=" tw-justify-center tw-w-32 tw-flex tw-items-center">
              <img
                src={require(`../../assets/images/${brand}`)}
                className=" tw-mx-auto"
                alt={`Brand ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
