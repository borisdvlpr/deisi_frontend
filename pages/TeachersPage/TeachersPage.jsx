import React from 'react';
import './TeachersPage.scss';
import Carousel from '../../components/Carousel/Carousel';
import zuck from '../../public/zuck.png';

export default function TeachersPage() {
	const teachersCards = [
		{
			imageSrc: zuck,
			name: 'Teacher 1',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 2',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 3',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 4',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 5',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 6',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 7',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 8',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 9',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Teacher 10',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
	];

	return (
		<div id="teachers-page" className="teachers-page section page">
			<div className="text-area">
				<div className="row-content">
					<div className="column-content">
						<div className="page-title teachers-title"> OS NOSSOS PROFESSORES </div>
						<div className="teachers-stats column-content">
							<div className="row-content">
								<div className="teachers-stat">
									<div className="teachers-bigstext"> 70% </div>
									<div className="teachers-smallstext"> dos professores têm experiência no mercado de trabalho. </div>
								</div>
							</div>
						</div>
					</div>

					<div className="teachers-par">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque amet. Vero quaerat soluta ratione facere
						maxime, odio nemo magnam perspiciatis sunt eum atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
						veritatis at veniam id odio.
					</div>
				</div>
			</div>

			<div className="teachers-carousel">
				<Carousel usersCards={teachersCards} />
			</div>
		</div>
	);
}
