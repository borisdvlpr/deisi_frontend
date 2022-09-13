import React from 'react';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import Carousel from '../../components/Carousel/Carousel';

import './TeachersPage.scss';

export default function TeachersPage() {
	const [headerLoaded, headerError, headerData] = apiRequest('/api/pages/list?pageName=Teachers');
	const [isLoaded, isError, apiData] = apiRequest('/api/teachers/list');

	const pageSettings = {
		textColor: '#ffffff',
		orientation: 'row',
		statAlign: 'left',
		paragraphAlign: 'right',
	};

	const errorHeader = {
		title: 'Error :(',
		stat: 'NaN',
		statText: 'No stats available...',
		pageText: 'Unable to load page data, try again...',
	};

	return (
		<div id="teachers-page" className="teachers-page section page">
			{headerLoaded !== false && headerError === undefined && headerData !== null ? (
				<PageHeader {...{ ...headerData[0], ...pageSettings }} />
			)
				: (
					<PageHeader {...{ ...errorHeader, ...pageSettings }} />
				)}

			{isLoaded !== false && isError === undefined && apiData !== null ? (
				<div className="teachers-carousel">
					<Carousel cardsData={apiData} nrSlides={5} buttonStyle="regular" textColor="#ffffff" />
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
