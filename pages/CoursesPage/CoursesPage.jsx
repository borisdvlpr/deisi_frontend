import React, { useState } from 'react';
import Slider from 'react-slick';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import CourseCard from '../../components/CourseCard/CourseCard';

import './CoursesPage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
	const [isLoaded, isError, apiData] = apiRequest('/courses-api/list');
	const [sliderRef, setSliderRef] = useState(null);

	const pageSettings = {
		title: 'E AGORA?',
		stat: 6,
		statText: 'cursos no nosso departamento. Qual é o teu?',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque
					amet. Vero quaerat soluta ratione facere maxime, odio nemo magnam perspiciatis sunt eum
					atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
					veritatis at veniam id odio, nisi incidunt nobis vitae laudantium laboriosam officiis
					saepe dolores architecto nesciunt tempore nihil, quos voluptates tenetur cumque natus`,

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

	return (
		<div id="courses-page" className="courses-page section page">
			<PageHeader {...pageSettings} />

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
