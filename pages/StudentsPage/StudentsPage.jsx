import React from 'react';
import './StudentsPage.scss';
import Carousel from '../../components/Carousel/Carousel';
import zuck from '../../public/zuck.png';

function StudentsPage() {
	const studentsCards = [
		{
			imageSrc: zuck,
			name: 'Student 1',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 2',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 3',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 4',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 5',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 6',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 7',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 8',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 9',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
		{
			imageSrc: zuck,
			name: 'Student 10',
			description: 'Lorem ipsum dolor sit amet, consectur dolori',
		},
	];

	return (
		<div id="students-page" className="students-page section page">
			<div className="text-area">
				<div className="row-content">
					<div className="students-par">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non eos id neque
						amet. Vero quaeratsoluta ratione facere maxime, odio nemo magnam perspiciatis sunt eum
						atque! Earum adipisci suscipit asperiores, placeat qui cumque. Nostrum corrupti
						veritatis at veniam id odio.
					</div>

					<div className="column-content">
						<div className="page-title students-title"> OS NOSSOS ALUNOS </div>
						<div className="students-stats column-content">
							<div className="row-content">
								<div className="students-stat">
									<div className="students-bigstext"> 99.9% </div>
									<div className="students-smallstext">
										{' '}
										de estatística.
										{' '}
										<br />
										{' '}
										Mais uma estatística qualquer.
										{' '}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="students-carousel">
				<Carousel usersCards={studentsCards} />
			</div>
		</div>
	);
}

export default StudentsPage;
