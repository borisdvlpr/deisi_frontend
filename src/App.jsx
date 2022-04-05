import React from 'react';
import Navbar from '../parts/Navbar/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';
import StatsPage from '../pages/StatsPage/StatsPage';
import StudentsPage from '../pages/StudentsPage/StudentsPage';
import CompaniesPage from '../pages/CompaniesPage/CompaniesPage';
import TeachersPage from '../pages/TeachersPage/TeachersPage';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
				<LandingPage />
				<StatsPage />
				<StudentsPage />
				<CompaniesPage />
				<TeachersPage />
			</main>
		</>
	);
}

export default App;
