/** @format */

import React from "react";
import Slider from "react-slick";

const MultipleCarousel = ({ children, breakpoints, slides = 4, center = false }) => {
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: breakpoints.md,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: breakpoints.sm,
					slidesToScroll: 1,
					initialSlide: 2,
					arrows: false
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: breakpoints.mobile,
					slidesToScroll: 1,
					initialSlide: 2,
					arrows: false,
				},
			},
		],
	};

	return <Slider {...settings}>{children}</Slider>;
};

export default MultipleCarousel;
