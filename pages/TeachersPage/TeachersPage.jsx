import React from 'react';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import Carousel from '../../components/Carousel/Carousel';

import './TeachersPage.scss';

export default function TeachersPage() {
	const [isLoaded, isError, apiData] = apiRequest('/teachers-api/list');

	const pageSettings = {
		title: 'OS PROFESSORES',
		stat: '70%',
		statText: 'do professores têm experiência\nno mercado de trabalho.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque
					amet. Vero quaerat soluta ratione facere maxime, odio nemo magnam perspiciatis sunt eum
					atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
					veritatis at veniam id odio, nisi incidunt nobis vitae laudantium laboriosam officiis
					saepe dolores architecto nesciunt tempore nihil, quos voluptates tenetur cumque natus
					voluptatum? Dicta vitae repellendus cupiditate eum iste earum velit ex cumque sequi`,

		textColor: '#ffffff',
		orientation: 'row',
		statAlign: 'left',
		paragraphAlign: 'right',
	};

	return (
		<div id="teachers-page" className="teachers-page section page">
			<PageHeader {...pageSettings} />

			{isLoaded !== false && isError === undefined && apiData !== null ? (
				<div className="teachers-carousel">
					<Carousel cardsData={apiData} nrSlides={5} buttonStyle="regular" textColor="#ffffff" />
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
