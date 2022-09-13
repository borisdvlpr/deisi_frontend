import React from 'react';
import propTypes from 'prop-types';

import './UserCard.scss';

export default function UserCard(props) {
	const { card, buttonStyle, textColor } = props;

	function toggleDesctiption() {
		const image = document.getElementById(card.name);
		const userDescription = document.getElementById(card.description);

		if (image.style.display === 'flex') {
			image.style.display = 'none';
			userDescription.style.display = 'inline';
		} else {
			image.style.display = 'flex';
			userDescription.style.display = 'none';
		}
	}

	return (
		<div key={card.name} className="card">
			<div className="profile">
				<div id={card.description} className="info no-display" style={{ color: textColor }}>{card.description}</div>
				<div id={card.name} className="image-container">
					<img src={card.imgSrc} alt={card.name} />
				</div>
				<button className={`user-button terminal-font button-${buttonStyle}`} onClick={() => toggleDesctiption()}>{card.name}</button>
			</div>
		</div>
	);
}

UserCard.propTypes = {
	card: propTypes.object.isRequired,
	buttonStyle: propTypes.array.isRequired,
	textColor: propTypes.array.isRequired,
};
