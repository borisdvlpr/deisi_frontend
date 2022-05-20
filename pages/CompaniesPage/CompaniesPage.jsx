import React from 'react';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';
import Carousel from '../../components/Carousel/Carousel';

import './CompaniesPage.scss';

export default function CompaniesPage() {
	const [headerLoaded, headerError, headerData] = apiRequest('/api/pages/list?pageName=Companies');
	const [isLoaded, isError, apiData] = apiRequest('/api/companies/list');

	const pageSettings = {
		textColor: '#2e347c',
		orientation: 'row-reverse',
		statAlign: 'right',
		paragraphAlign: 'left',
	};

	const errorHeader = {
		title: 'Error :(',
		stat: 'NaN',
		statText: 'No stats available...',
		pageText: 'Unable to load page data, try again...',
	};

	return (
		<div id="companies-page" className="companies-page section page">
			{headerLoaded !== false && headerError === undefined && headerData !== null ? (
				<PageHeader {...{ ...headerData[0], ...pageSettings }} />
			)
				: (
					<PageHeader {...{ ...errorHeader, ...pageSettings }} />
				)}

			{isLoaded !== false && isError === undefined && apiData !== null ? (
				<div className="companies-carousel">
					<Carousel cardsData={apiData} nrSlides={5} buttonStyle="inverse" textColor="#2e347c" />
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
