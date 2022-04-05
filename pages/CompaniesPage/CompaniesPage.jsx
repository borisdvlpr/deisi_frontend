import React from 'react';
import './CompaniesPage.scss';
import Carousel from '../../components/Carousel/Carousel';
import zuck from '../../public/zuck.png';

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

	return (
		<div id="companies-page" className="companies-page section page">
			<div className="text-area">
				<div className="row-content">
					<div className="companies-par">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque amet. Vero quaerat soluta ratione facere
						maxime, odio nemo magnam perspiciatis sunt eum atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
						veritatis at veniam id odio, nisi incidunt nobis vitae laudantium laboriosam officiis saepe dolores architecto nesciunt tempore
						nihil, quos voluptates tenetur cumque natus voluptatum? Dicta vitae repellendus cupiditate eum iste earum velit ex cumque sequi
						accusantium.
					</div>

					<div className="column-content">
						<div className="page-title companies-title">O MERCADO ESPERA POR TI!</div>
						<div className="companies-stats column-content">
							<div className="row-content">
								<div className="companies-stat">
									<div className="companies-bigstext"> 98.7% </div>
									<div className="companies-smallstext">
										de empregabilidade.
										<br />
										1000€ salário médio incial.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="companies-carousel">
				<Carousel usersCards={companiesCards} />
			</div>
		</div>
	);
}
