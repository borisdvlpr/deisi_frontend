import React from 'react';
import propTypes from 'prop-types';

import './PageHeader.scss';

export default function pageHeader(props) {
	const {
		title, stat, statText, pageText, textColor, orientation, statAlign, paragraphAlign,
	} = props;

	const headerStyle = {
		color: textColor,
		flexDirection: orientation,
	};

	return (
		<div className="page-header" style={headerStyle}>
			<div className="stat-group" style={{ textAlign: statAlign }}>
				<div className="page-title">{title.toUpperCase()}</div>
				<div className="stat">{stat}</div>
				<div className="stat-text">{statText}</div>
			</div>

			<div className="page-paragraph" style={{ textAlign: paragraphAlign }}>
				{pageText}
			</div>
		</div>
	);
}

pageHeader.propTypes = {
	title: propTypes.string.isRequired,
	stat: propTypes.string.isRequired,
	statText: propTypes.string.isRequired,
	pageText: propTypes.string.isRequired,
	textColor: propTypes.string.isRequired,
	orientation: propTypes.string.isRequired,
	statAlign: propTypes.string.isRequired,
	paragraphAlign: propTypes.string.isRequired,
};
