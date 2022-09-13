import React from 'react';
import propTypes from 'prop-types';

import './CourseCard.scss';

export default function CourseCard(props) {
	const { index, card } = props;

	return (
		<div key={index} className="card-course">
			<div className="text-info">
				<div className="card-header">
					<h2 className="card-title">{card.title}</h2>
					<span>{card.degree}</span>
				</div>
				<p>
					{card.courseDescription}
				</p>
			</div>
			<a className="card-button button-inverse" href={card.url} target="_blank" rel="noreferrer">Mais Info!</a>
		</div>
	);
}

CourseCard.propTypes = {
	index: propTypes.number.isRequired,
	card: propTypes.object.isRequired,
};
