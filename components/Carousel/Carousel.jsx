import React from 'react';
import Slider from 'react-slick';
import propTypes from 'prop-types';
import UserCard from '../UserCard/UserCard';

import './Carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(props) {
	const { cardsData, nrSlides } = props;

	const sliderSettings = {
		arrows: false,
		dots: false,
		slidesToShow: nrSlides,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="content">
			<Slider {...sliderSettings}>
				{cardsData.map((card, index) => (
					<UserCard index={index} card={card} />
				))}
			</Slider>
		</div>
	);
}

Carousel.propTypes = {
	cardsData: propTypes.array.isRequired,
	nrSlides: propTypes.number.isRequired,
};
