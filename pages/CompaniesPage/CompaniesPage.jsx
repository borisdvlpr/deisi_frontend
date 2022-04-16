import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Carousel from '../../components/Carousel/Carousel';
import zuck from '../../public/zuck.png';

import './CompaniesPage.scss';

export default function CompaniesPage() {
	const companiesCards = [
		{
			imageSrc: zuck,
			name: 'Company 1',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 2',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 3',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 4',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 5',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 6',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 7',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 8',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 9',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Company 10',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
	];

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

			<div className="companies-carousel">
				<Carousel cardsData={companiesCards} nrSlides={5} />
			</div>
		</div>
	);
}
