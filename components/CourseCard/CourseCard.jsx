import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import './CourseCard.scss';

export default function CourseCard(props) {
	const { index, card } = props;

	useEffect(() => {
		document.addEventListener('DOMContentLoaded', () => {
			const coordinatorMailTo = document.getElementById('coordinator-href');
			coordinatorMailTo.href = `mailto:${card.directorEmail}`;
			// console.log(`Coordinator Mail Parameter ${coordinatorMailTo.href}`);
		});
	}, []);

	return (
		<div key={index} className="card-course">
			<div className="text-info">
				<div className="card-header">
					<h2 className="card-title">{card.title}</h2>
					<span>{card.degree}</span>
				</div>
				<p>
					{card.studentDegree}
					{' '}
					|
					{' '}
					{card.time}
					{' '}
					|
					{' '}
					{card.ects}
				</p>
				<p>
					Direção -
					{' '}
					<a id="coordinator-href" href="mailto:">{card.directorName}</a>
				</p>
				<p>
					Coordenação -
					{' '}
					<a href="mailto:alexandra.campos@ulusofona.pt">Alexandra Campos</a>
				</p>
				<p>
					Secretariado -
					{' '}
					<a href="mailto:anabela.moura@ulusofona.pt">Anabela Moura</a>
				</p>
			</div>
			<div className="card-button button-inverse" href="https://google.com/" target="_blank">Mais Info!</div>
		</div>
	);
}

CourseCard.propTypes = {
	index: propTypes.number.isRequired,
	card: propTypes.object.isRequired,
};
