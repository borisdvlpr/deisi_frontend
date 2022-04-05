import React from 'react';
import Slider from 'react-slick';
import propTypes from 'prop-types';
import './Carousel.scss';
import UserCard from '../UserCard/UserCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(props) {
	const { usersCards } = props;

	const sliderSettings = {
		arrows: false,
		dots: false,
		slidesToShow: 5,
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
				{usersCards.map((card, index) => (
					<UserCard index={index} card={card} />
				))}
			</Slider>
		</div>
	);
}

Carousel.propTypes = {
	usersCards: propTypes.array.isRequired,
};
