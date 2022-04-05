import React from 'react';
import propTypes from 'prop-types';

import './UserCard.scss';

export default function UserCard(props) {
	const { index, card } = props;

	return (
		<div key={index} className="card">
			<div className="profile">
				<div className="info" />
				<div className="imageProfile"><img src={card.imageSrc} alt={card.name} /></div>
				<div className="user-button button">{card.name}</div>
			</div>
		</div>
	);
}

UserCard.propTypes = {
	index: propTypes.number.isRequired,
	card: propTypes.object.isRequired,
};
