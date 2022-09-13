import React, { useState } from 'react';
import Slider from 'react-slick';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import CourseCard from '../../components/CourseCard/CourseCard';

import './CoursesPage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
	const [headerLoaded, headerError, headerData] = apiRequest('/api/pages/list?pageName=Courses');
	const [isLoaded, isError, apiData] = apiRequest('/api/courses/list');
	const [sliderRef, setSliderRef] = useState(null);

	const pageSettings = {
		textColor: '#2e347c',
		orientation: 'row-reverse',
		statAlign: 'right',
		paragraphAlign: 'left',
	};

	const sliderSettings = {
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				},
			},
		],
	};

	const errorHeader = {
		title: 'Error :(',
		stat: 'NaN',
		statText: 'No stats available...',
		pageText: 'Unable to load page data, try again...',
	};

	return (
		<div id="courses-page" className="courses-page section page">
			{headerLoaded !== false && headerError === undefined && headerData !== null ? (
				<PageHeader {...{ ...headerData[0], ...pageSettings }} />
			)
				: (
					<PageHeader {...{ ...errorHeader, ...pageSettings }} />
				)}

			{isLoaded !== false && isError === undefined && apiData !== null ? (
				<div className="courses-carousel">
					<Slider ref={setSliderRef} {...sliderSettings}>
						{apiData.map((card, index) => (
							<CourseCard index={index} card={card} buttonStyle="inverse" textColor="#2e347c" />
						))}
					</Slider>
					<div className="controls">
						<button onClick={sliderRef?.slickPrev}>{'<'}</button>
						<button onClick={sliderRef?.slickNext}>{'>'}</button>
					</div>
				</div>
			)
				: (
					<div className="error-carousel">
						<p>Erro :(</p>
					</div>
				)}
		</div>
	);
}
