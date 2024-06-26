import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import VideoPlayer from "../videoPlayer";

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brands = [
    "video2.mp4",
    "video3.mp4",
    "video4.mp4"
    
  ];

  return (
    <div className=" tw-flex tw-items-center">
      <div className="container tw-mx-auto tw-relative">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="tw-text-center tw-rounded-md tw-overflow-hidden " >
                <VideoPlayer src={require(`../../assets/images/${brand}`)} className=" tw-rounded-md tw-mx-auto" />
             
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="tw-absolute  tw-bg-button-gradient tw-w-16 tw-h-16 tw-rounded-xl  tw-right-32  tw-flex tw-justify-center tw-items-center -tw-bottom-24  tw-z-10 tw-cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight className="tw-text-white tw-text-2xl" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="tw-absolute  tw-bg-button-gradient tw-w-16 tw-h-16  tw-left-32 tw-rounded-xl  tw-flex tw-justify-center tw-items-center -tw-bottom-24  tw-z-10 tw-cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="tw-text-white tw-text-2xl" />
    </div>
  );
};

export default AboutSlider;
