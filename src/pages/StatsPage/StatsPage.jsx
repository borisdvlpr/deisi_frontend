import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import apiRequest from '../../api/api_request';
import PageHeader from '../../components/PageHeader/PageHeader';

import './StatsPage.scss';

const state = {
	labels: ['2008', '2015', '2021'],
	datasets: [{
		label: '# Graduates',
		data: [20, 130, 500],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
		],
		borderWidth: 3,
		tension: 0.4,
		pointRadius: 5,

	}],
};

export default function StatsPage() {
	const [headerLoaded, headerError, headerData] = apiRequest('/api/pages/list?pageName=Metrics');

	const pageSettings = {
		textColor: '#2e347c',
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
		<div id="metrics-page" className="metrics-page section page">
			{headerLoaded !== false && headerError === undefined && headerData !== null ? (
				<PageHeader {...{ ...headerData[0], ...pageSettings }} />
			)
				: (
					<PageHeader {...{ ...errorHeader, ...pageSettings }} />
				)}

			<div className="graph">
				<Line
					data={state}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							x: {
								grid: {
									display: false,
									borderColor: 'white',
								},
								drawOnChartArea: true,
								drawTicks: true,
							},
							y: {
								beginAtZero: true,
								grid: {
									display: false,
									borderColor: 'white',
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
}
