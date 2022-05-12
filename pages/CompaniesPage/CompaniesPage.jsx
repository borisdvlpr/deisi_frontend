import React from 'react';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import Carousel from '../../components/Carousel/Carousel';

import './CompaniesPage.scss';

export default function CompaniesPage() {
	const [isLoaded, isError, apiData] = apiRequest('/companies-api/list');

	const pageSettings = {
		title: 'O MERCADO ESPERA-TE!',
		stat: '98.7%',
		statText: 'de empregabilidade.1000€ de salário médio inicial.',
		paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque
					amet. Vero quaerat soluta ratione facere maxime, odio nemo magnam perspiciatis sunt eum
					atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
					veritatis at veniam id odio, nisi incidunt nobis vitae laudantium laboriosam officiis
					saepe dolores architecto nesciunt tempore nihil, quos voluptates tenetur cumque natus
					voluptatum? Dicta vitae repellendus cupiditate eum iste earum velit ex cumque sequi`,

		textColor: '#2e347c',
		orientation: 'row-reverse',
		statAlign: 'right',
		paragraphAlign: 'left',
	};

	return (
		<div id="companies-page" className="companies-page section page">
			<PageHeader {...pageSettings} />

			{isLoaded !== false && isError === undefined && apiData !== null ? (
				<div className="companies-carousel">
					<Carousel cardsData={apiData} nrSlides={5} buttonStyle="inverse" textColor="#2e347c" />
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
