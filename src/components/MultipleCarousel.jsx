/** @format */

import React from "react";
import Slider from "react-slick";

const MultipleCarousel = ({ children, slides = 4, center = false }) => {
	const settings = {
		dots: true,
		centerMode: center,
		lazyLoad: true,
		centerPadding: "60px",
		autoplay: true,
		infinite: false,
		speed: 500,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		pauseOnHover: true,
		slidesToShow: slides,
		slidesToScroll: 1,
	};

	return <Slider {...settings}>{children}</Slider>;
};

export default MultipleCarousel;
